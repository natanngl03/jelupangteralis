import "./assets/scss/bootsrap.min.css";
import "./assets/css/style.css";
import { AnimatePresence } from "motion/react";
import { Suspense, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/elements/Navbar";
import Footer from "./components/elements/Footer";
import Fallback from "./components/ui/Fallback";
import WaButton from "./components/ui/WaButton/WaButton";

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
         <AnimatePresence>{isLoading && <Fallback key="initial-loading" />}</AnimatePresence>
         <Suspense fallback={<Fallback />}>
            <Navbar />
            <main className="bg-light">
               <Outlet />
            </main>
            <Footer />
            <WaButton />
         </Suspense>
      </>
   );
}
