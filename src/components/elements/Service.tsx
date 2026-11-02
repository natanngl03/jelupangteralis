import { motion } from "motion/react";
import Section from "../ui/Section";
import Card from "../ui/Card";
import MasonryGrid from "../ui/MasonryGrid";

const data = [
   {
      title: "Teralis",
      description: "Pembuatan Teralis Berkualitas untuk Keamanan dan Keindahan Rumah Anda",
      imgSrc: "/img/product/teralis3_Watermarked.webp",
      page: "teralis",
   },
   {
      title: "Railing Tangga",
      description: "Pembuatan Railing Tangga Kokoh dan Elegan untuk Keamanan dan Keindahan Hunian Anda",
      imgSrc: "/img/product/railing_tangga1_Watermarked.webp",
      page: "railing-tangga",
   },
   {
      title: "Tangga Putar",
      description: "Pembuatan Tangga Putar Kokoh dan Elegan untuk Memaksimalkan Ruang dan Mempercantik Hunian",
      imgSrc: "/img/product/tangga_putar3_Watermarked.webp",
      page: "tangga-putar",
   },
   {
      title: "Gerbang",
      description: "Pembuatan pagar gerbang kokoh dan elegan untuk keamanan serta keindahan rumah",
      imgSrc: "/img/product/gerbang15_Watermarked.webp",
      page: "gerbang",
   },
   {
      title: "Pintu Besi",
      description: "Pembuatan pintu besi berkualitas dengan desain sesuai kebutuhan Anda",
      imgSrc: "/img/product/pintu_besi5_Watermarked.webp",
      page: "pintu-besi",
   },
   {
      title: "Layanan Custom & Repair",
      description:
         "Pembuatan berbagai kebutuhan sesuai desain, ukuran, dan keinginan Anda, serta kami juga menerima perbaikan pagar, kanopi, teralis, tangga, dan lainnya yang rusak",
      imgSrc: "/img/product/custom.webp",
      page: "perbaikan",
   },
];

export default function Service({ withTitle }: { withTitle: boolean }) {
   return (
      <>
         <Section id="service" className="py-6 py-lg-7 border-bottom ">
            {withTitle && (
               <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, ease: "easeInOut" }}
                  className="mb-5 text-center text-primary"
               >
                  Temukan Layanan <span className="text-secondary">Lainnya</span>
               </motion.h2>
            )}

            <MasonryGrid className="row g-2 g-lg-4">
               {data.map((item, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 30 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: Number(`0.7${idx}`), ease: "easeInOut" }}
                     className="col-6 col-lg-4 masonry-item"
                  >
                     <Card title={item.title} description={item.description} imgSrc={item.imgSrc} page={item.page} />
                  </motion.div>
               ))}
            </MasonryGrid>
         </Section>
      </>
   );
}
