import { useRef, Suspense } from "react";
import Fallback from "../ui/Fallback";

import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";
import type { GalleryItem, ImageGalleryRef } from "react-image-gallery";

export default function MyGallery({ images }: { images: GalleryItem[] }) {
   const galleryRef = useRef<ImageGalleryRef>(null);

   return (
      <Suspense fallback={<Fallback />}>
         <ImageGallery
            ref={galleryRef}
            items={images}
            onSlide={(index) => console.log("Slid to", index)}
            showPlayButton={false}
            additionalClass="image-gallery-custom"
         />
      </Suspense>
   );
}
