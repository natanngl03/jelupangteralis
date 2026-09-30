import { Fragment } from "react";
import Section from "../ui/Section";
import { FaArrowRight } from "react-icons/fa";
import GLightboxInit from "../ui/GLightboxInit";

export default function PortofolioSection() {
   return (
      <Fragment>
         <GLightboxInit />
         <Section id="portofolio" className="bg-white py-5 py-lg-7 border-bottom wow fadeIn" data-wow-delay="0.1s">
            <h2 className="mb-5 text-center text-primary wow fadeInDown" data-wow-delay="0.2s">
               Portofolio <span className="text-secondary">Kami</span>
            </h2>

            <div className="row g-2">
               {["img18", "img26", "img3", "img17", "img21", "img28", "img8", "img9"].map((item, idx) => (
                  <div className="col-6 col-lg-3 wow fadeIn" data-wow-delay={`{0.${idx + 1}s}`} key={idx}>
                     <div className="card">
                        <a href={`/img/portofolio/${item}.jpg`} className="glightbox" data-gallery="portofolio-section">
                           <img
                              src={`/img/portofolio/${item}.jpg`}
                              className="card-img-top"
                              alt="portofolio image"
                              style={{ height: "200px", backgroundSize: "cover" }}
                              loading="lazy"
                           />
                        </a>
                     </div>
                  </div>
               ))}
            </div>

            <div className="mt-5 d-flex justify-content-end">
               <a href="/portofolio" className="btn border border-2 border-primary text-primary fw-bold wow fadeIn" data-wow-delay="0.1s">
                  Lihat Selengkapnya
                  <FaArrowRight className="ms-2" />
               </a>
            </div>
         </Section>
      </Fragment>
   );
}
