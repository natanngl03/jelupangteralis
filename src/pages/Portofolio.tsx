import Header from "../components/ui/Header";
import PortofolioGallery from "../components/Portofolio/PortofolioGallery";
import { Helmet } from "react-helmet";

export default function Portofolio() {
   return (
      <>
         <Helmet title="Portofolio | Jelupang Jaya Pasir" />
         <Header title="Potofolio Kami" />
         <PortofolioGallery />
      </>
   );
}
