// "use client";

// import React from "react";
// import SectionHeading from "./section-heading";
// import { skillsData } from "@/lib/data";
// import { useSectionInView } from "@/lib/hooks";
// import { motion } from "framer-motion";

// const fadeInAnimationVariants = {
//   initial: {
//     opacity: 0,
//     y: 100,
//   },
//   animate: (index: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: 0.05 * index,
//     },
//   }),
// };

// export default function Skills() {
//   const { ref } = useSectionInView("Skills");

//   return (
//     <section
//       id="skills"
//       ref={ref}
//       className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40 "
//     >
//       <SectionHeading>My Skills</SectionHeading>
//       <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800 ">
//         {skillsData.map((skill, index) => (
//           <motion.li
//             className=" bg-white borderBlack rounded-xl  px-5 py-3 dark:bg-white/10 dark:text-white/80 "
//             key={index}
//             variants={fadeInAnimationVariants}
//             initial="initial"
//             whileInView="animate"
//             viewport={{
//               once: true,
//             }}
//             custom={index}
//           >
//             {skill}{" "}
//           </motion.li>
//         ))}
//       </ul>
//     </section>
//   );
// }


"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: (index: number) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: 0.1 * index,
      type: "spring",
      stiffness: 100,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-4 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            className="flex flex-col items-center bg-white border border-gray-300 rounded-xl px-6 py-4 shadow-lg dark:bg-gray-900 dark:text-white dark:border-gray-700"
            key={skill.name}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <div className="text-3xl mb-2">{React.createElement(skill.icon)}</div>
            <span>{skill.name}</span>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
