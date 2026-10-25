import { Head } from "vite-react-ssg";
import FaqSection from "../components/elements/Faq";
import Header from "../components/ui/Header";

export default function Faq() {
   return (
      <>
         <Head>
            <title>Pertanyaan | Jelupang Jaya Kanopi</title>
         </Head>
         <Header title="Pertanyaan" />
         <FaqSection />
      </>
   );
}
