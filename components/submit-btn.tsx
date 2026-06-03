import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function SubmitBtn() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="group flex h-12 w-full items-center justify-center gap-2 rounded-full bg-accent text-sm font-medium text-accent-ink outline-none transition-all hover:scale-[1.02] active:scale-[0.99] disabled:scale-100 disabled:opacity-60 sm:w-40"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-2 border-accent-ink/30 border-t-accent-ink" />
      ) : (
        <>
          Send message
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </>
      )}
    </button>
  );
}
