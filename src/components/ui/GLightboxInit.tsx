import { useEffect } from "react";
import "glightbox/dist/css/glightbox.min.css";

export default function GLightboxInit() {
   useEffect(() => {
      let lightbox: any;
      let mounted = true;

      const init = async () => {
         const { default: GLightbox } = await import("glightbox");

         if (!mounted) return;

         lightbox = GLightbox({
            selector: ".glightbox",
            loop: true,
            touchNavigation: true,
            keyboardNavigation: true,
         });
      };

      init();

      return () => {
         mounted = false;
         lightbox?.destroy();
      };
   }, []);

   return null;
}
