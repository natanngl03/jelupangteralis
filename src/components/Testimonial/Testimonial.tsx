import Section from "../ui/Section";
import "./style.css";
import { useEffect } from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoMdPerson } from "react-icons/io";

const testimonials = [
   { name: "Bpk. Usup", msg: "Pengerjaan rapi dan amanah, tukangnya juga ramah" },
   { name: "Bpk. Zenal Abidin", msg: "Jujur dan teliti, material berkualitas. <br /> Semoga semakin sukses Jelupang Jaya Teralis" },
   { name: "Ibu. Esmelia", msg: "Awalnya lihat iklannya dari google <br /> coba2 ternyata pengerjaannya rapih <br /> desain juga modern" },
   { name: "Bpk. Udi Nuhdi", msg: "Disarankan sama teman <br /> memang bagus sih. mantapp" },
   {
      name: "Putra Dwi",
      msg: "Ini bengkel teralis langganan saya <br />baru tau mereka sekarang sudah ada website. <br /> Semoga semakin banyak yang kenal ya.",
   },
];

export default function Testimonial() {
   useEffect(() => {
      const script = document.createElement("script");
      script.src = "/js/testimoni.js";

      document.body.appendChild(script);

      return () => {
         script.remove();
      };
   }, []);

   return (
      <Section id="testimonial" className="bg-white py-7">
         <div className="container-fluid testimonial pb-5">
            <div className="container pb-5">
               <div className="text-center mx-auto pb-5 wow fadeInUp" data-wow-delay="0.2s" style={{ maxWidth: "800px" }}>
                  <h4 className="text-primary">Testimoni Pelanggan</h4>
                  <h1 className="display-5 mb-4">Apa Kata Pelanggan Kami?</h1>
                  <p className="mb-0">
                     Kepercayaan dan kepuasan pelanggan adalah prioritas kami. Simak pengalaman mereka setelah menggunakan jasa Jelupang Jaya Teralis.
                  </p>
               </div>
               <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.2s">
                  {testimonials.map((item, idx) => (
                     <div className="testimonial-item" key={idx}>
                        <div className="testimonial-quote-left">
                           {/* <i className="fas fa-quote-left fa-2x"></i> */}
                           <FaQuoteLeft />
                        </div>
                        <div className="testimonial-img">
                           {/* <img src="img/testimonial-2.jpg" className="img-fluid" alt="Image" /> */}
                           <div
                              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center"
                              style={{ width: "50px", height: "50px" }}
                           >
                              <IoMdPerson size={20} />
                           </div>
                        </div>
                        <div className="testimonial-text">
                           <p
                              className="mb-0"
                              dangerouslySetInnerHTML={{
                                 __html: item.msg,
                              }}
                           />
                        </div>
                        <div className="testimonial-title">
                           <div>
                              <p className="mb-0 fw-bold">{item.name}</p>
                           </div>
                           <div className="d-flex text-primary">
                              {[...Array(5)].map((_, idx) => (
                                 <FaStar key={idx} className="text-secondary" />
                              ))}
                           </div>
                        </div>
                        <div className="testimonial-quote-right">
                           <FaQuoteRight />
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </Section>
   );
}
