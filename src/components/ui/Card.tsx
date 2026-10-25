import { useEffect, useRef, useState } from "react";
import Spinner from "../../components/ui/Spinner";

type Props = {
   title: string;
   description: string;
   imgSrc: string;
   page: string;
};

export default function Card({ title, description, imgSrc, page }: Props) {
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
      <div className="card">
         <img
            ref={imgRef}
            src={imgSrc}
            className="card-img-top"
            alt="..."
            style={{ height: "200px", backgroundSize: "cover" }}
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
         />

         <div className="card-body d-flex flex-column gap-2">
            <div className="d-flex flex-column gap-2">
               <h3 className="card-title fs-5">{title}</h3>

               <p className="card-text" style={{ fontSize: "14px" }}>
                  {description}
               </p>
            </div>
            <a href={`/lainnya/${page}`} className="btn btn-primary mt-2" style={{ width: "100%" }}>
               Selengkapnya
            </a>
         </div>

         {isLoading && <Spinner />}
      </div>
   );
}
