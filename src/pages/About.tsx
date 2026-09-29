import Header from "../components/ui/Header";
import AboutSection from "./../components/About/About";
import ExperienceDivider from "../components/SectionDivider/ExperienceDivider";
import Location from "../components/Location/Location";
import Helmet from "../components/ui/Helmet";

export default function About() {
   return (
      <>
         <Helmet title="Tentang | Jelupang Jaya Pasir" />
         <Header title="Tentang Kami" />
         <AboutSection withoutTitle />
         <ExperienceDivider />
         <Location />
      </>
   );
}
