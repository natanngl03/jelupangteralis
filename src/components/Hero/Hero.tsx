import { useEffect } from "react";
import "./style.css";

export default function Hero() {
   useEffect(() => {
      const script = document.createElement("script");
      script.src = "/js/carousel.js";

      document.body.appendChild(script);

      return () => {
         script.remove();
      };
   }, []);

   return (
      <div className="header-carousel owl-carousel">
         {[...Array(4)].map((_, idx) => (
            <div className="header-carousel-item">
               <img src={`/img/car/carousel-${idx + 1}.webp`} className="img-fluid w-100" alt="Image" loading="lazy" />
            </div>
         ))}
      </div>
   );
}
