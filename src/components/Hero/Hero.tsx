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
         <div className="header-carousel-item">
            <img src="/img/car/carousel-1.webp" className="img-fluid w-100" alt="Image" />
         </div>
         <div className="header-carousel-item">
            <img src="/img/car/carousel-2.webp" className="img-fluid w-100" alt="Image" />
         </div>
         <div className="header-carousel-item">
            <img src="/img/car/carousel-3.webp" className="img-fluid w-100" alt="Image" />
         </div>
         <div className="header-carousel-item">
            <img src="/img/car/carousel-4.webp" className="img-fluid w-100" alt="Image" />
         </div>
      </div>
   );
}
