import Section from "../ui/Section";
import "./style.css";
import { useEffect } from "react";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
   {
      name: "Esmelia Malau",
      msg: "pelayanannya bagus, sangat rekomen, mantap dan sukses selalu 💪👍👍",
      img: "/img/testimoni/esmelia.png",
   },
   { name: "Hendra", msg: "Mantap pokoknya, pengerjaan nya cepat dan Rapih, harga nya juga bersahabat.", img: "/img/testimoni/hendra.png" },
   {
      name: "Jenal Abidin",
      msg: "Mantap bos pengerjaanya rapih bos👍",
      img: "/img/testimoni/jenal.png",
   },
   { name: "Usup Sukabumi", msg: "Mantap om 👍", img: "/img/testimoni/usup.png" },
   {
      name: "Aqilla Asyifa",
      msg: "Jelupang jaya teralis, hasil kerjanya rapih, tepat waktu dan untuk bahan yang digunakannya sesuai spesifikasi... <br /> mantap pokonya, next order lagi kalau ada project.",
      img: "/img/testimoni/aqilla.png",
   },
   {
      name: "Neng Depi",
      msg: "mantul hasilnya rapih dan memuaskan",
      img: "/img/testimoni/depi.png",
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
                        <div className="testimonial-img ">
                           <img src={item.img} className="img-fluid" alt="testimoni" width="20px" height="20px" />
                        </div>
                        <div className="d-flex flex-column align-items-center">
                           <p className="mb-0 fw-bold">{item.name}</p>
                           <div className="d-flex text-primary">
                              {[...Array(5)].map((_, idx) => (
                                 <FaStar key={idx} className="text-secondary" />
                              ))}
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
