import "./assets/css/animate.min.css";
import "./assets/scss/bootsrap.min.css";
import "./assets/css/style.css";
import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Fallback from "./components/ui/Fallback";
import WaButton from "./components/ui/WaButton/WaButton";
import WowInit from "./components/ui/WowInit";

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
         {isLoading && <Fallback />}
         <Suspense fallback={<Fallback />}>
            <Navbar />
            <main className="bg-light">
               <Outlet />
               <WowInit />
            </main>
            <Footer />
            <WaButton />
         </Suspense>
      </>
   );
}
