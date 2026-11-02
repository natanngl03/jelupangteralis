import { motion } from "motion/react";
import Section from "../ui/Section";
import VideoModal from "../ui/VideoModal";
import { FaArrowRight } from "react-icons/fa";
import videos from "../../json/videos.json";

export default function VideoSection({ bgColor = "bg-white" }: { bgColor?: string }) {
   const data = videos.slice(0, 4);

   return (
      <Section id="video" className={`py-7 border-bottom ${bgColor}`}>
         <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="mb-5 text-center text-primary d-lg-none"
         >
            Video <span className="text-secondary">Gallery</span>
         </motion.h2>

         <div className="row">
            <div className="col-12 col-lg-5">
               <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="mb-5 text-secondary d-none d-lg-block"
               >
                  Video <span className="text-primary">Gallery</span>
               </motion.h2>
               <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.75, ease: "easeInOut" }}
                  className="text-center text-lg-start mb-5"
               >
                  Sebagai referensi untuk anda, berikut kami kumpulkan video saat pengerjaan dilapangan
               </motion.p>
               <motion.a
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  href="/videos"
                  className="btn border border-2 border-primary text-primary fw-bold d-none d-lg-inline"
               >
                  Temukan Video Lainnya
                  <FaArrowRight className="ms-2" />
               </motion.a>
            </div>
            <div className="col-12 col-lg-7">
               <div className="row g-2">
                  {data.map((item2, idx2) => (
                     <motion.div
                        key={idx2}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                        className="col-6"
                     >
                        <VideoModal videoID={item2} key={idx2} />
                     </motion.div>
                  ))}
               </div>

               <div className="mt-5 d-flex justify-content-end d-lg-none">
                  <motion.a
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.8, ease: "easeInOut" }}
                     href="/videos"
                     className="btn border border-2 border-primary text-primary fw-bold"
                  >
                     Temukan Video Lainnya
                     <FaArrowRight className="ms-2" />
                  </motion.a>
               </div>
            </div>
         </div>
      </Section>
   );
}
