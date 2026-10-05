import Header from "../components/ui/Header";
import AboutSection from "./../components/About/About";
import ExperienceDivider from "../components/SectionDivider/ExperienceDivider";
import Location from "../components/Location/Location";
import { Head } from "vite-react-ssg";

export default function About() {
   return (
      <>
         <Head>
            <title>Tentang Kami | Jelupang Jaya Teralis</title>
         </Head>
         <Header title="Jasa Kanopi Bergaransi <br /> di Tangerang Selatan" />
         <AboutSection withoutTitle />
         <ExperienceDivider />
         <Location />
      </>
   );
}
