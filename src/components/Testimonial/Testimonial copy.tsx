import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Testimonial {
   name: string;
   role: string;
   image: string;
   message: string;
}

const testimonials: Testimonial[] = [
   {
      name: "Budi Santoso",
      role: "Pemilik Usaha",
      image: "/img/testimonial/user-1.jpg",
      message: "Pelayanannya sangat baik dan hasil pekerjaannya sesuai dengan yang saya harapkan. Sangat recommended.",
   },
   {
      name: "Andi Wijaya",
      role: "Pengusaha",
      image: "/img/testimonial/user-2.jpg",
      message: "Proses pengerjaan cepat dan komunikasinya sangat mudah. Hasilnya juga terlihat profesional.",
   },
   {
      name: "Rina Sari",
      role: "Customer",
      image: "/img/testimonial/user-3.jpg",
      message: "Saya sangat puas dengan hasilnya. Timnya responsif dan membantu dari awal sampai selesai.",
   },
   {
      name: "Andi Wijaya",
      role: "Pengusaha",
      image: "/img/testimonial/user-2.jpg",
      message: "Proses pengerjaan cepat dan komunikasinya sangat mudah. Hasilnya juga terlihat profesional.",
   },
   {
      name: "Rina Sari",
      role: "Customer",
      image: "/img/testimonial/user-3.jpg",
      message: "Saya sangat puas dengan hasilnya. Timnya responsif dan membantu dari awal sampai selesai.",
   },
];

const Testimonial = () => {
   return (
      <section className="py-5">
         <div className="container">
            <div className="text-center mb-5">
               <h2 className="fw-bold">Apa Kata Mereka?</h2>
               <p className="text-muted">Pengalaman pelanggan bersama kami</p>
            </div>

            <Swiper
               modules={[Autoplay, Pagination, Navigation]}
               loop
               spaceBetween={24}
               slidesPerView={1}
               pagination={{
                  clickable: true,
               }}
               autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
               }}
               breakpoints={{
                  768: {
                     slidesPerView: 2,
                  },
                  992: {
                     slidesPerView: 3,
                  },
               }}
               style={{ paddingBottom: "20px" }}
            >
               {testimonials.map((testimonial, index) => (
                  <SwiperSlide key={index}>
                     <div className="card border-0 shadow-sm h-100">
                        <div className="card-body p-4">
                           <div className="d-flex align-items-center mb-3">
                              <img
                                 src={testimonial.image}
                                 alt={testimonial.name}
                                 width={60}
                                 height={60}
                                 className="rounded-circle object-fit-cover me-3"
                              />

                              <div>
                                 <h5 className="mb-1">{testimonial.name}</h5>

                                 <small className="text-muted">{testimonial.role}</small>
                              </div>
                           </div>

                           <p className="mb-0 text-muted">"{testimonial.message}"</p>
                        </div>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
};

export default Testimonial;
