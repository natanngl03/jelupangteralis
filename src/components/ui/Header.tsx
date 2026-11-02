import { motion } from "motion/react";

export default function Header({ title }: { title: string }) {
   return (
      <div className="header-wrapper">
         <motion.img
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            viewport={{ once: true, amount: 0.2 }}
            src="/img/header.webp"
            alt="header image"
            width="100%"
            height="100%"
         />
         <div className="title-wrapper">
            <motion.h1
               initial={{ opacity: 0, y: -30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.8, ease: "easeInOut" }}
               viewport={{ once: true, amount: 0.2 }}
               className="title text-white text-center"
               dangerouslySetInnerHTML={{ __html: title }}
            />
         </div>
      </div>
   );
}
