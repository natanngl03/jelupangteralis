import { Fragment, useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import Section from "../ui/Section";
import { FaArrowRight } from "react-icons/fa";
import GLightboxInit from "../ui/GLightboxInit";
import Spinner from "../ui/Spinner";

export default function PortofolioSection({ bgColor = "bg-white" }: { bgColor?: string }) {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const imgRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      const img = imgRef.current;

      if (!img) return;

      if (img.complete) {
         setIsLoading(false);
      }
   }, []);

   return (
      <Fragment>
         <GLightboxInit />
         <Section id="portofolio" className={`${bgColor} py-5 py-lg-7 border-bottom`}>
            <motion.h2
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.7, ease: "easeInOut" }}
               className="mb-5 text-center text-primary"
            >
               Portofolio <span className="text-secondary">Kami</span>
            </motion.h2>

            <div className="row g-2">
               {[
                  "kordoba_plavon1",
                  "kordoba2",
                  "kordoba_plavon5",
                  "kanopi_kaca1",
                  "baja_ringan3",
                  "kanopi_otomatis1",
                  "kanopi_standard2",
                  "teralis3_Watermarked",
               ].map((item, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0 }}
                     whileInView={{ opacity: 1 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: Number(`0.8${idx + 1}`), ease: "easeInOut" }}
                     className="col-6 col-lg-3 position-relative wow fadeIn"
                  >
                     <div className="card">
                        <a href={`/img/product/${item}.webp`} className="glightbox" data-gallery="portofolio-section">
                           <img
                              ref={imgRef}
                              src={`/img/product/${item}.webp`}
                              className="card-img-top"
                              alt="portofolio image"
                              style={{ height: "200px", backgroundSize: "cover" }}
                              loading="lazy"
                              onLoad={() => setIsLoading(false)}
                              onError={() => setIsLoading(false)}
                           />
                        </a>
                     </div>
                     {isLoading && <Spinner />}
                  </motion.div>
               ))}
            </div>

            <div className="mt-5 d-flex justify-content-end">
               <motion.a
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  href="/portofolio"
                  className="btn border border-2 border-primary text-primary fw-bold wow fadeIn"
                  data-wow-delay="0.1s"
               >
                  Lihat Selengkapnya
                  <FaArrowRight className="ms-2" />
               </motion.a>
            </div>
         </Section>
      </Fragment>
   );
}
