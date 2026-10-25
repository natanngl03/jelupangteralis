import Header from "../components/ui/Header";
import PortofolioGallery from "../components/elements/PortofolioGallery";
import { Head } from "vite-react-ssg";

export default function Portofolio() {
   return (
      <>
         <Head>
            <title>Portofolio | Jelupang Jaya Kanopi</title>
         </Head>
         <Header title="Portofolio Kami" />
         <PortofolioGallery />
      </>
   );
}
