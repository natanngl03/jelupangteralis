import { useEffect } from "react";
import AOS from "aos";

export default function AOSInit() {
   useEffect(() => {
      //   AOS.init({
      //      duration: 1000,
      //      once: true,
      //      offset: 0,
      //      startEvent: "DOMContentLoaded",
      //   });

      AOS.init({
         once: true,
         delay: 100,
         offset: 0,
         duration: 1000,
      });
   }, []);

   return null;
}
