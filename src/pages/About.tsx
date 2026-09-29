import Header from "../components/ui/Header";
import AboutSection from "./../components/About/About";
import ExperienceDivider from "../components/SectionDivider/ExperienceDivider";
import Location from "../components/Location/Location";

export default function About() {
   return (
      <div>
         <Header title="Tentang Kami" />
         <AboutSection withoutTitle />
         <ExperienceDivider />
         <Location />
      </div>
   );
}
