import { Fragment, useEffect } from "react";
import About from "../components/elements/About";
import ExperienceDivider from "../components/elements/ExperienceDivider";
import HowToOrder from "../components/elements/HowToOrder";
import Service from "../components/elements/Service";
import VideoSection from "../components/elements/VideoSection";
import PortofolioSection from "../components/elements/PortofolioSection";
import AboutDivider from "../components/elements/AboutDivider";
import Faq from "../components/elements/Faq";
import Testimonial from "../components/elements/Testimonial";
import Hero from "../components/elements/Hero";
import Location from "../components/elements/Location";
import { Head } from "vite-react-ssg";
import KanopiSection from "../components/elements/KanopiSection";

export default function Home() {
   useEffect(() => {}, []);

   return (
      <Fragment>
         <Head>
            <title>Beranda | Jelupang Jaya Kanopi</title>
         </Head>
         <Hero />
         <About isH1 />
         <ExperienceDivider />
         <KanopiSection />

         <Service withTitle />
         <HowToOrder />
         <AboutDivider />
         <VideoSection />
         <PortofolioSection />
         <Faq />
         <Testimonial />
         <Location />
      </Fragment>
   );
}
