import { Head } from "vite-react-ssg";
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
                  <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-delay="100">
                     <ImageComp
                        src={getImage(data.totalImage, data.imageName)?.[0]?.original}
                        alt="kanopi"
                        loading="lazy"
                        imgStyle="w-100 rounded-3"
                     />
                  </div>
               )}

               {data.totalImg > 1 && (
                  <div className="col-12 col-lg-6" data-aos="fade-right" data-aos-delay="100">
                     <MyGallery images={getImage(data.totalImg, data.imageName)} />
                  </div>
               )}

               <div className={`col-12 col-lg-6`}>
                  <div className=" d-flex flex-column justify-content-between">
                     {data?.desc && (
                        <p data-aos="fade-up" data-aos-delay="100">
                           {data?.desc}
                        </p>
                     )}

                     {data?.spec && data.spec?.length > 0 && (
                        <div>
                           <p className="m-0" data-aos="fade-up" data-aos-delay="100">
                              Spesifikasi :
                           </p>

                           <ul>
                              {data?.spec?.map((item: any, idx: number) => (
                                 <li key={idx} data-aos="fade-up" data-aos-delay={`${idx + 1}00`}>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}

                     {data?.variant && data.variant?.length > 0 && (
                        <div>
                           <p className="m-0" data-aos="fade-up" data-aos-delay="100">
                              Variant:
                           </p>

                           <ul>
                              {data?.variant?.map((item: any, idx: number) => (
                                 <li key={idx} data-aos="fade-up" data-aos-delay={`${idx + 1}00`}>
                                    {item}
                                 </li>
                              ))}
                           </ul>
                        </div>
                     )}

                     <div className="d-flex flex-column gap-3  text-center text-lg-start">
                        <div data-aos="fade-up" data-aos-delay="100">
                           <p className="m-0 fw-bold">Harga Mulai Dari:</p>
                           <p className="mb-3 fw-bold fs-3">{data.price}</p>
                        </div>

                        {/* <div className="btn btn-primary w-100">Konsultasi</div> */}

                        <a
                           href={waOrder(data?.pageTitle)}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="btn btn-primary px-3 py-2 rounded-pill"
                           data-aos="fade-up"
                           data-aos-delay="200"
                        >
                           <FaWhatsapp size={25} className="me-2" />
                           <span>Konsultasi</span>
                        </a>
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
