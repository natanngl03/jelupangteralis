import { Head } from "vite-react-ssg";
import { motion } from "motion/react";
import MyGallery from "../ui/ImageGallery";
import videos from "../../json/videos.json";
import VideoModal from "../ui/VideoModal";
import ImageComp from "../ui/ImageComp";
import HowToOrder from "./HowToOrder";
import Testimonial from "./Testimonial";
import Header from "../ui/Header";
import { FaWhatsapp } from "react-icons/fa";
import { waOrder } from "../../lib/helper";

export default function PageDetail({ data }: { data: any }) {
   const getImage = (totalImage: number, imageName: string) => {
      const images = [...Array(totalImage)].map((_, idx) => {
         const img = imageName.replace("#number#", `${idx + 1}`);
         return { original: `/img/product/${img}`, thumbnail: `/img/product/${img}` };
      });

      return images;
   };

   return (
      <>
         <Head>
            <title>{data?.pageTitle || "Produk Tidak Ditemukan"} | Jelupang Jaya Kanopi</title>
         </Head>

         <Header title={data?.title || "404"} />

         <div className="container py-7">
            <div className="row g-4">
               {data.totalImg == 1 && (
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.7, ease: "easeInOut" }}
                     className="col-12 col-lg-6"
                  >
                     <ImageComp
                        src={getImage(data.totalImage, data.imageName)?.[0]?.original}
                        alt="kanopi"
                        loading="lazy"
                        imgStyle="w-100 rounded-3"
                     />
                  </motion.div>
               )}

               {data.totalImg > 1 && (
                  <motion.div
                     initial={{ opacity: 0, x: -30 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true, amount: 0.2 }}
                     transition={{ duration: 0.7, ease: "easeInOut" }}
                     className="col-12 col-lg-6"
                  >
                     <MyGallery images={getImage(data.totalImg, data.imageName)} />
                  </motion.div>
               )}

               <div className={`col-12 col-lg-6`}>
                  <div className=" d-flex flex-column justify-content-between">
                     {data?.desc && (
                        <motion.p
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, amount: 0.2 }}
                           transition={{ duration: 0.7, ease: "easeInOut" }}
                        >
                           {data?.desc}
                        </motion.p>
                     )}

                     {data?.spec && data.spec?.length > 0 && (
                        <div>
                           <motion.p
                              className="m-0"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.75, ease: "easeInOut" }}
                           >
                              Spesifikasi :
                           </motion.p>

                           <ul>
                              {data?.spec?.map((item: any, idx: number) => (
                                 <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: Number(`0.8${idx + 1}`), ease: "easeInOut" }}
                                 >
                                    {item}
                                 </motion.li>
                              ))}
                           </ul>
                        </div>
                     )}

                     {data?.variant && data.variant?.length > 0 && (
                        <div>
                           <motion.p
                              className="m-0"
                              initial={{ opacity: 0, y: 30 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true, amount: 0.2 }}
                              transition={{ duration: 0.75, ease: "easeInOut" }}
                           >
                              Variant:
                           </motion.p>

                           <ul>
                              {data?.variant?.map((item: any, idx: number) => (
                                 <motion.li
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ duration: Number(`0.8${idx + 1}`), ease: "easeInOut" }}
                                 >
                                    {item}
                                 </motion.li>
                              ))}
                           </ul>
                        </div>
                     )}

                     <div className="d-flex flex-column gap-3  text-center text-lg-start">
                        <motion.div
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, amount: 0.2 }}
                           transition={{ duration: 0.7, ease: "easeInOut" }}
                        >
                           <p className="m-0 fw-bold">Harga Mulai Dari:</p>
                           <p className="mb-3 fw-bold fs-3">{data.price}</p>
                        </motion.div>

                        {/* <div className="btn btn-primary w-100">Konsultasi</div> */}

                        <motion.a
                           initial={{ opacity: 0, y: 30 }}
                           whileInView={{ opacity: 1, y: 0 }}
                           viewport={{ once: true, amount: 0.2 }}
                           transition={{ duration: 0.7, ease: "easeInOut" }}
                           href={waOrder(data?.pageTitle)}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="btn btn-primary px-3 py-2 rounded-pill"
                           data-aos="fade-up"
                           data-aos-delay="200"
                        >
                           <FaWhatsapp size={25} className="me-2" />
                           <span>Konsultasi</span>
                        </motion.a>
                     </div>
                  </div>
               </div>

               {data.videos.length > 0 && (
                  <div className="col-12 col-lg-6">
                     <VideoModal videoID={videos[data.videos[0]]} />
                  </div>
               )}
            </div>
         </div>
         <HowToOrder />
         <Testimonial />
      </>
   );
}
