// import "./assets/css/animate.min.css";
import "./assets/scss/bootsrap.min.css";
import "./assets/css/style.css";
import "aos/dist/aos.css";
import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";
import Fallback from "./components/ui/Fallback";
import WaButton from "./components/ui/WaButton/WaButton";
// import WowInit from "./components/ui/WowInit";
import AOSInit from "./components/ui/AosInit";

export default function App() {
   const [isLoading, setIsLoading] = useState<boolean>(true);

   useEffect(() => {
      const timeout = setTimeout(() => {
         setIsLoading(false);
      }, 300);

      return () => {
         clearTimeout(timeout);
      };
   }, []);

   return (
      <>
         <AOSInit />

         {isLoading && <Fallback />}
         <Suspense fallback={<Fallback />}>
            <Navbar />
            <main className="bg-light">
               <Outlet />
               {/* <WowInit /> */}
            </main>
            <Footer />
            <WaButton />
         </Suspense>
      </>
   );
}
