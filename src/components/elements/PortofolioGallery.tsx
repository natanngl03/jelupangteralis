import { Fragment } from "react";
import { motion } from "motion/react";
import Section from "../ui/Section";
import GLightboxInit from "../ui/GLightboxInit";
import ImageItem from "../ui/ImageItem";

export default function PortofolioGallery() {
   const images = () => {
      const kanopiKaca = [...Array(3)].map((_, idx) => `kanopi_kaca${idx + 1}.webp`);
      const kanopiOtomatis = [...Array(2)].map((_, idx) => `kanopi_otomatis${idx + 1}.webp`);
      const kanopiStandard = [...Array(5)].map((_, idx) => `kanopi_standard${idx + 1}.webp`);
      const kordobaPlavon = [...Array(15)].map((_, idx) => `kordoba_plavon${idx + 1}.webp`);
      const kordoba = [...Array(11)].map((_, idx) => `kordoba${idx + 1}.webp`);
      const gerbang = [...Array(15)].map((_, idx) => `gerbang${idx + 1}_Watermarked.webp`);
      const bajaRingan = [...Array(3)].map((_, idx) => `baja_ringan${idx + 1}.webp`);
      const pintuBesi = [...Array(14)].map((_, idx) => `pintu_besi${idx + 1}_Watermarked.webp`);
      const railingTangga = [...Array(9)].map((_, idx) => `railing_tangga${idx + 1}_Watermarked.webp`);
      const tanggaPutar = [...Array(5)].map((_, idx) => `tangga_putar${idx + 1}_Watermarked.webp`);
      const teralis = [...Array(9)].map((_, idx) => `teralis${idx + 1}_Watermarked.webp`);

      return [
         ...kanopiKaca,
         ...kanopiOtomatis,
         ...kanopiStandard,
         ...kordobaPlavon,
         ...kordoba,
         ...gerbang,
         ...bajaRingan,
         ...pintuBesi,
         ...railingTangga,
         ...tanggaPutar,
         ...teralis,
      ];
   };

   return (
      <Fragment>
         <GLightboxInit />
         <Section id="portofolio" className="bg-white py-5 py-lg-7 border-bottom">
            <div className="row g-2">
               {images().map((item, idx) => (
                  <motion.div
                     className="col-6 col-lg-3 position-relative"
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.7, ease: "easeInOut" }}
                  >
                     <ImageItem item={item} />
                  </motion.div>
               ))}
            </div>
         </Section>
      </Fragment>
   );
}
