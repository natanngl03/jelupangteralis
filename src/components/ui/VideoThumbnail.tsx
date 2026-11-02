import { useRef, useEffect, useState } from "react";
import { FaYoutube } from "react-icons/fa";
import Spinner from "./Spinner";

export default function VideoThumbnail({ toggle, videoID }: { toggle: () => void; videoID: string }) {
   const [thumbnailLoading, setThumbnailLoading] = useState<boolean>(true);
   const thumbnailRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      const img = thumbnailRef.current;

      if (!img) return;

      if (img.complete) {
         setThumbnailLoading(false);
      }
   }, []);

   return (
      <div className="position-relative" style={{ cursor: "pointer" }}>
         <img
            ref={thumbnailRef}
            src={`https://img.youtube.com/vi/${videoID}/mqdefault.jpg`}
            alt="video thumbnail"
            width="100%"
            className="rounded"
            loading="lazy"
            onLoad={() => setThumbnailLoading(false)}
            onError={() => setThumbnailLoading(false)}
         />

         {thumbnailLoading ? (
            <Spinner />
         ) : (
            <div
               onClick={toggle}
               style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  display: "flex",
               }}
            >
               <FaYoutube className="text-danger rounded bg-white m-auto" size={30} />
            </div>
         )}
      </div>
   );
}
