import { useEffect, useRef, useState } from "react";
import Spinner from "../ui/Spinner";

export default function Hero() {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const imgRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      const img = imgRef.current;

      if (!img) return;

      if (img.complete) {
         setIsLoading(false);
      }

      const script = document.createElement("script");

      script.src = "/js/carousel.js";
      script.async = true;

      document.body.appendChild(script);

      return () => {
         script.remove();
      };
   }, []);

   return (
      <section className="hero-wrapper" data-aos="fade-in" data-aos-delay="100">
         <div className="header-carousel owl-carousel position-relative">
            {[...Array(3)].map((_, idx) => (
               <div className="header-carousel-item" key={idx}>
                  <img
                     ref={imgRef}
                     src={`/img/carousel/hero${idx + 1}.webp`}
                     className="hero-image"
                     alt="Jelupang Jaya Kanopi"
                     width="1920"
                     height="1080"
                     loading={idx === 0 ? "eager" : "lazy"}
                     fetchPriority={idx === 0 ? "high" : "auto"}
                     decoding="async"
                     onLoad={() => setIsLoading(false)}
                     onError={() => setIsLoading(false)}
                  />
               </div>
            ))}

            {isLoading && <Spinner />}
         </div>
      </section>
   );
}
