import { Fragment, useEffect } from "react";
import About from "../components/About/About";
import ExperienceDivider from "../components/SectionDivider/ExperienceDivider";
import HowToOrder from "../components/HowToOrder/HowToOrder";
import Service from "../components/Service/Service";
import VideoSection from "../components/Videos/VideoSection";
import PortofolioSection from "../components/Portofolio/PortofolioSection";
import AboutDivider from "../components/SectionDivider/AboutDivider";
import Faq from "../components/Faq/Faq";
import Testimonial from "../components/Testimonial/Testimonial";
import Hero from "../components/Hero/Hero";
import Location from "../components/Location/Location";
import { Head } from "vite-react-ssg";

export default function Home() {
   useEffect(() => {}, []);
   return (
      <Fragment>
         <Head>
            <title>Beranda | Jelupang Jaya Teralis</title>
         </Head>
         <Hero />
         <About />
         <ExperienceDivider />
         <Service />
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
