import { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";
import GLightbox from "glightbox";

export default function GLightboxInit() {
   useEffect(() => {
      const lightbox = GLightbox({
         selector: ".glightbox",
         touchNavigation: true,
         loop: true,
      });

      return () => {
         lightbox.destroy();
      };
   }, []);

   return null;
}
