import Section from "../ui/Section";
import VideoModal from "../ui/VideoModal";
import { FaArrowRight } from "react-icons/fa";
import { videos } from "./data.json";

export default function VideoSection() {
   const data = videos.slice(0, 4);

   return (
      <Section id="video" className="py-7 border-bottom">
         <h2 className="mb-5 text-center text-primary d-lg-none wow fadeInDown" data-wow-delay="0.1s">
            Video <span className="text-secondary">Gallery</span>
         </h2>

         <div className="row">
            <div className="col-12 col-lg-5">
               <h2 className="mb-5 text-secondary d-none d-lg-block wow fadeInDown" data-wow-delay="0.1s">
                  Video <span className="text-primary">Gallery</span>
               </h2>
               <p className="text-center text-lg-start mb-5 wow fadeIn" data-wow-delay="0.2s">
                  Sebagai referensi untuk anda, berikut kami kumpulkan video saat pengerjaan dilapangan
               </p>
               <a
                  href="/videos"
                  className="btn border border-2 border-primary text-primary fw-bold d-none d-lg-inline wow fadeIn"
                  data-wow-delay="0.1s"
               >
                  Temukan Video Lainnya
                  <FaArrowRight className="ms-2" />
               </a>
            </div>
            <div className="col-12 col-lg-7">
               <div className="row g-2">
                  {data.map((item2, idx2) => (
                     <div className="col-6 wow fadeIn" data-wow-delay={`0.${idx2 + 1}s`} key={idx2}>
                        <VideoModal videoID={item2} key={idx2} />
                     </div>
                  ))}
               </div>

               <div className="mt-5 d-flex justify-content-end d-lg-none">
                  <a href="/videos" className="btn border border-2 border-primary text-primary fw-bold wow fadeIn" data-wow-delay="0.1s">
                     Temukan Video Lainnya
                     <FaArrowRight className="ms-2" />
                  </a>
               </div>
            </div>
         </div>
      </Section>
   );
}
