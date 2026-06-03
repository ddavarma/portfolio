"use server";

import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import ContactFormEmail from "@/email/contact-form-email";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

// Minimum time (ms) a genuine human takes between the form rendering and
// submitting. Bots fire near-instantly.
const MIN_FILL_MS = 2500;

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // 1. Honeypot — a hidden field no human sees. If it's filled, it's a bot.
  //    Return success silently so the bot thinks it worked and doesn't retry.
  const honeypot = formData.get("company");
  if (typeof honeypot === "string" && honeypot.trim() !== "") {
    return { data: { skipped: true } };
  }

  // 2. Time-trap — the form embeds its render time. A submit faster than a
  //    human could plausibly type is a bot.
  const renderedAt = Number(formData.get("renderedAt"));
  if (Number.isFinite(renderedAt) && Date.now() - renderedAt < MIN_FILL_MS) {
    return { data: { skipped: true } };
  }

  if (!validateString(senderEmail, 500)) {
    return { error: "Invalid sender email" };
  }
  if (!validateString(message, 5000)) {
    return { error: "Invalid message" };
  }

  // 3. Gibberish trap — a single long token with no whitespace (e.g.
  //    "DmfGJDRvyemRBYbiLY") is almost always spam, never a real message.
  if (/^\S{12,}$/.test((message as string).trim())) {
    return { data: { skipped: true } };
  }

  let data;

  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "ddavarma@outlook.com",
      subject: "Message from Contact form",
      replyTo: senderEmail as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        senderEmail: senderEmail as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
  return {
    data,
  };
};
