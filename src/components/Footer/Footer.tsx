import React from "react";
import { IoLogoWhatsapp, IoMdMail } from "react-icons/io";
import { FaHeart } from "react-icons/fa";

import { FaLocationDot } from "react-icons/fa6";
const contacts = [
   {
      icon: <FaLocationDot />,
      label: "Buaran Timur, Serpong Utara <br /> Tangerang Selatan",
      href: "https://maps.app.goo.gl/ype8qci8o1tg1qKc9",
   },
   {
      icon: <IoLogoWhatsapp />,
      label: "0822 5344 2031",
      href: "https://maps.app.goo.gl/ype8qci8o1tg1qKc9",
   },
   {
      icon: <IoMdMail />,
      label: "admin@jelupangteralis.com",
      href: "#",
   },
];

export default function Footer() {
   return (
      <footer className="bg-dark pt-5">
         <div className="container text-white">
            <div className="row g-4 text-center text-lg-start">
               <div className="col-12 col-lg-6">
                  <h2 className="display-6 fs-3 fw-bold">Jelupang Jaya Teralis</h2>
                  <p className="mb-0">
                     Melayani pembuatan dan pemasangan teralis, kanopi, pagar, pintu besi, gerbang, railing, serta berbagai kebutuhan las besi untuk
                     rumah dan bangunan anda.
                  </p>
               </div>
               <div className="col-12 col-lg-3">
                  <h3 className="display-6 fs-5 fw-bold text-center text-lg-start">Kontak</h3>
                  <div className="d-flex flex-column align-items-center align-items-lg-start gap-2">
                     {contacts.map((item, idx) => (
                        <Contact {...item} key={idx} />
                     ))}
                  </div>
               </div>
               <div className="col-12 col-lg-3">
                  <h3 className="display-6 fs-5 fw-bold">Jam Operasional</h3>
                  <p className="mb-0">Senin - Sabtu : 08:00 - 18:00</p>
                  <p className="mb-0">Minggu/Merah : Tutup</p>
               </div>

               <div className="col-12 border-top py-2">
                  <p className="text-center mb-0">Copyright {new Date().getFullYear()} - JELUPANG JAYA TERALIS</p>
                  <p className="text-center mb-0">
                     Made With <FaHeart className="text-danger" />
                  </p>
               </div>
            </div>
         </div>
      </footer>
   );
}

const Contact = ({ icon, label, href }: { icon: React.ReactNode; label: string; href: string }) => {
   return (
      <div className="d-flex align-items-center text-decoration-none text-white mb-0 gap-2">
         {icon}
         <span
            dangerouslySetInnerHTML={{
               __html: label,
            }}
         />
      </div>
   );
};
