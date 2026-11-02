import { motion } from "motion/react";
import Section from "../ui/Section";

export default function AboutDivider() {
   return (
      <Section id="aboutdivider" className="bg-primary py-5" withMotion>
         <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="text-white text-center"
            data-aos="fade-up"
            data-aos-delay="100"
         >
            Kami Berlokasi
            <br />
            Di Tangerang Selatan
         </motion.h2>
      </Section>
   );
}
