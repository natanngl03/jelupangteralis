import { motion } from "motion/react";
type Props = { children: React.ReactNode; title?: string; id: string; className?: string; withMotion?: boolean };

export default function Section({ children, title, id, withMotion, className = "" }: Props) {
   return (
      <motion.section
         {...(withMotion && {
            initial: { opacity: 0 },
            whileInView: { opacity: 1 },
            transition: { duration: 0.5, ease: "easeInOut" },
            viewport: { once: true, amount: 0 },
         })}
         id={id}
         className={className}
      >
         <div className="container">
            {title && <h2 className="text-primary text-center mb-5 display-6 fw-bold">{title}</h2>}
            {children}
         </div>
      </motion.section>
   );
}
