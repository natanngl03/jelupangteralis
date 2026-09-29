import { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";

export default function GLightboxInit() {
   useEffect(() => {
      let lightbox: any;

      const init = async () => {
         const { default: GLightbox } = await import("glightbox");

         lightbox = GLightbox({
            selector: ".glightbox",
         });
      };

      init();

      return () => {
         lightbox?.destroy();
      };
   }, []);

   return null;
}
