import { Fragment } from "react";
import Section from "../ui/Section";
import GLightboxInit from "../ui/GLightboxInit";

export default function PortofolioGallery() {
   return (
      <Fragment>
         <GLightboxInit />
         <Section id="portofolio" className="bg-white py-5 py-lg-7 border-bottom">
            <div className="row g-2">
               {[...Array(42)].map((_, idx) => (
                  <div className="col-6 col-lg-3 wow fadeIn" data-wow-delay={`{0.${idx + 1}s}`} key={idx}>
                     <div className="card">
                        <a href={`/img/portofolio/img${idx + 1}.jpg`} className="glightbox" data-gallery="portofolio-gallery">
                           <img
                              src={`/img/portofolio/img${idx + 1}.jpg`}
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
         </Section>
      </Fragment>
   );
}
