import Section from "../ui/Section";
import AboutPNG from "./../../assets/img/about2.png";
import { FaCheckCircle } from "react-icons/fa";

export default function About({ withoutTitle }: { withoutTitle?: boolean }) {
   return (
      <Section id="about" className="bg-white py-7 border-bottom border-top">
         {!withoutTitle && (
            <h1 className="mb-5 text-center text-primary wow fadeInDown" data-wow-delay="0.1s">
               Jasa Kanopi Bergaransi <br /> di <span className="text-secondary">Tangerang Selatan</span>
            </h1>
         )}

         <div className="row g-4 g-lg-5">
            <div className="col-12 col-lg-7 order-2 order-lg-1 pt-4 pt-lg-0 wow fadeIn" data-wow-delay="0.2s">
               <h2 className="mb-lg-4 text-primary">Tentang Kami</h2>

               <p>
                  Jelupang Jaya Teralis adalah ahli kanopi di Tangerang Selatan yang melayani pembuatan kanopi berkualitas dengan pengerjaan
                  profesional dan bergaransi. Kami mengutamakan kekuatan, kerapian, dan desain yang sesuai dengan kebutuhan setiap pelanggan.
               </p>

               <p>
                  Selain kanopi, kami juga mengerjakan berbagai produk las besi custom seperti teralis, railing tangga dan balkon, tangga putar,
                  gerbang, pagar, kusen, serta berbagai kebutuhan besi lainnya.
               </p>

               <div className="row">
                  {["Bergaransi", "Teknisi Professional", "Berpengalaman", "Full Custom", "Harga Kompetitif", "Material Berkualitas"].map(
                     (item, idx) => (
                        <div className="col-12 col-lg-6" key={idx}>
                           <p>
                              <FaCheckCircle className="text-secondary" />
                              <span className="ms-3">{item}</span>
                           </p>
                        </div>
                     ),
                  )}
               </div>
            </div>
            <div className="col-12 col-lg-5 order-1 order-lg-2 wow fadeIn" data-wow-delay="0.3s">
               <img
                  src={AboutPNG}
                  alt="about image"
                  style={{
                     width: "100%",
                     height: "100%",
                     display: "block",
                  }}
               />
            </div>
         </div>
      </Section>
   );
}
