import FaqSection from "../components/Faq/Faq";
import Header from "../components/ui/Header";
import Helmet from "../components/ui/Helmet";

export default function Faq() {
   return (
      <>
         <Helmet title="Pertanyaan | Jelupang Jaya Pasir" />
         <Header title="Pertanyaan" />
         <FaqSection />
      </>
   );
}
