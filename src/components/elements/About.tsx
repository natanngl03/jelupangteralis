import { motion } from "motion/react";
import Section from "../ui/Section";
// import AboutPNG from "./../../assets/img/about2.png";
import { FaCheckCircle } from "react-icons/fa";

export default function About({ isH1 }: { isH1?: boolean }) {
   return (
      <Section id="about" className="bg-white py-7 border-bottom border-top">
         {isH1 && (
            <motion.h1
               className="mb-5 text-center text-primary"
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.5 }}
            >
               Jasa Kanopi Bergaransi <br /> di <span className="text-secondary">Tangerang Selatan</span>
            </motion.h1>
         )}

         <div className="row g-4 g-lg-5">
            <div className="col-12 col-lg-7 order-2 order-lg-1 pt-4 pt-lg-0">
               {!isH1 && (
                  <motion.h2
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.7 }}
                     className="mb-lg-4 text-primary"
                  >
                     Tentang Kami
                  </motion.h2>
               )}

               <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
               >
                  Jelupang Jaya Kanopi adalah ahli kanopi di Tangerang Selatan yang melayani pembuatan kanopi berkualitas dengan pengerjaan
                  profesional dan bergaransi. Kami mengutamakan kekuatan, kerapian, dan desain yang sesuai dengan kebutuhan setiap pelanggan.
               </motion.p>

               <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
               >
                  Selain kanopi, kami juga mengerjakan berbagai produk las besi custom seperti kanopi, railing tangga dan balkon, tangga putar,
                  gerbang, pagar, kusen, serta berbagai kebutuhan besi lainnya.
               </motion.p>

               <div className="row">
                  {["Bergaransi", "Teknisi Professional", "Berpengalaman", "Full Custom", "Harga Kompetitif", "Material Berkualitas"].map(
                     (item, idx) => (
                        <div className="col-12 col-lg-6" key={idx}>
                           <motion.p
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.7 }}
                           >
                              <FaCheckCircle className="text-secondary" />
                              <span className="ms-3">{item}</span>
                           </motion.p>
                        </div>
                     ),
                  )}
               </div>
            </div>
            <motion.div
               initial={{ opacity: 0, x: 30 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.7 }}
               className="col-12 col-lg-5 order-1 order-lg-2"
            >
               <img
                  src="/img/product/kordoba_plavon1.webp"
                  alt="about image"
                  style={{
                     width: "100%",
                     height: "100%",
                     display: "block",
                     borderRadius: "20px",
                  }}
               />
            </motion.div>
         </div>
      </Section>
   );
}
