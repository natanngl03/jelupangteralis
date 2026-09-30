import { useEffect } from "react";

export default function WowInit() {
   useEffect(() => {
      import("wow.js").then(({ default: WOW }) => {
         const wow = new WOW({
            live: false,
         });

         wow.init();
      });
   }, []);

   return null;
}
