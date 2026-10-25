import Header from "../components/ui/Header";
import AboutSection from "../components/elements/About";
import ExperienceDivider from "../components/elements/ExperienceDivider";
import Location from "../components/elements/Location";
import { Head } from "vite-react-ssg";

export default function About() {
   return (
      <>
         <Head>
            <title>Tentang Kami | Jelupang Jaya Kanopi</title>
         </Head>
         <Header title="Jasa Kanopi Bergaransi <br /> di Tangerang Selatan" />
         <AboutSection isH1={false} />
         <ExperienceDivider />
         <Location />
      </>
   );
}
