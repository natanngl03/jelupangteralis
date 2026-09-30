import { Head } from "vite-react-ssg";
import FaqSection from "../components/Faq/Faq";
import Header from "../components/ui/Header";

export default function Faq() {
   return (
      <>
         <Head>
            <title>Pertanyaan | Jelupang Jaya Teralis</title>
         </Head>
         <Header title="Pertanyaan" />
         <FaqSection />
      </>
   );
}
