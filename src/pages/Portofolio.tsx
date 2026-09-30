import Header from "../components/ui/Header";
import PortofolioGallery from "../components/Portofolio/PortofolioGallery";
import { Head } from "vite-react-ssg";

export default function Portofolio() {
   return (
      <>
         <Head>
            <title>Portofolio | Jelupang Jaya Teralis</title>
         </Head>
         <Header title="Potofolio Kami" />
         <PortofolioGallery />
      </>
   );
}
