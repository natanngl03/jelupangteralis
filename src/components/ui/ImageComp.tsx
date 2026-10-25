import { useRef, useState, useEffect } from "react";
import Spinner from "../../components/ui/Spinner";

type Props = {
   src: string;
   alt: string;
   loading?: "eager" | "lazy";
   rootStyle?: string;
   imgStyle?: string;
   imgInlineStyle?: React.CSSProperties;
};

export default function ImageComp({ src, alt, rootStyle = "", imgStyle = "", imgInlineStyle, loading }: Props) {
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
      <div className={`position-relative ${rootStyle}`}>
         <img
            ref={imgRef}
            src={src}
            className={imgStyle}
            alt={alt}
            style={imgInlineStyle}
            loading={loading}
            onLoad={() => setIsLoading(false)}
            onError={() => setIsLoading(false)}
         />

         {isLoading && <Spinner />}
      </div>
   );
}
