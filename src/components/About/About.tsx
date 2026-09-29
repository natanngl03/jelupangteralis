import Section from "../ui/Section";
import AboutPNG from "./../../assets/img/about2.png";
import { FaCheckCircle } from "react-icons/fa";

export default function About({ withoutTitle }: { withoutTitle?: boolean }) {
   return (
      <Section id="about" className="bg-white py-7 border-bottom border-top">
         {!withoutTitle && (
            <h2 className="mb-5 text-center text-primary">
               Tentang <span className="text-secondary">Kami</span>
            </h2>
         )}

         <div className="row g-4 g-lg-5">
            <div className="col-12 col-lg-7 order-2 order-lg-1 pt-4 pt-lg-0">
               <h3 className="mb-lg-4 text-primary">Jelupang Jaya Teralis</h3>

               <p>
                  Kami melayani berbagai kebutuhan pembuatan dan pengerjaan produk mulai dari teralis, pagar, gerbang, kanopi, jendela, railing,
                  hingga berbagai pekerjaan custom sesuai kebutuhan.
               </p>

               <p>
                  Dengan pengalaman dalam mengerjakan berbagai jenis proyek, kami telah melayani perusahaan, developer perumahan, kontraktor, hingga
                  pemilik rumah pribadi. Setiap pekerjaan dikerjakan dengan memperhatikan ukuran, desain, fungsi, serta kebutuhan di lapangan.
               </p>

               <p>
                  Kami berkomitmen memberikan hasil yang rapi, kuat, dan sesuai dengan kebutuhan pelanggan, baik untuk kebutuhan rumah tinggal, proyek
                  perumahan, maupun kebutuhan bangunan lainnya.
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
            <div className="col-12 col-lg-5 order-1 order-lg-2">
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
