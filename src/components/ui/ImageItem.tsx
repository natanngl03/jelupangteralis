import { useEffect, useRef, useState } from "react";
import Spinner from "./Spinner";

export default function ImageItem({ item }: { item: string }) {
   const [isLoading, setIsLoading] = useState<boolean>(true);
   const imgRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      const img = imgRef.current;

      if (!img) return;

      if (img.complete) {
         setIsLoading(false);
      }
   }, []);

   return (
      <>
         <div className="card">
            <a href={`/img/product/${item}`} className="glightbox" data-gallery="portofolio-gallery">
               <img
                  ref={imgRef}
                  src={`/img/product/${item}`}
                  className="card-img-top"
                  alt="portofolio image"
                  style={{ height: "200px", backgroundSize: "cover" }}
                  loading="lazy"
                  onLoad={() => setIsLoading(false)}
                  onError={() => setIsLoading(false)}
               />
            </a>
         </div>

         {isLoading && <Spinner />}
      </>
   );
}
