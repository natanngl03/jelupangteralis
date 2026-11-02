import { useEffect } from "react";
import { motion } from "motion/react";

export default function Hero() {
   useEffect(() => {
      const script = document.createElement("script");

      script.src = "/js/carousel.js";
      script.async = true;

      document.body.appendChild(script);

      return () => {
         script.remove();
      };
   }, []);

   return (
      <motion.section
         className="hero-wrapper"
         initial={{ opacity: 0 }}
         whileInView={{ opacity: 1 }}
         transition={{ duration: 0.7, ease: "easeIn" }}
         viewport={{ once: true, amount: 0.2 }}
      >
         <div className="header-carousel owl-carousel position-relative">
            {[...Array(3)].map((_, idx) => (
               <div className="header-carousel-item" key={idx}>
                  <img
                     src={`/img/carousel/hero${idx + 1}.webp`}
                     className="hero-image"
                     alt="Jelupang Jaya Kanopi"
                     width="1920"
                     height="1080"
                     loading={idx === 0 ? "eager" : "lazy"}
                     fetchPriority={idx === 0 ? "high" : "auto"}
                     decoding="async"
                  />
               </div>
            ))}
         </div>
      </motion.section>
   );
}
