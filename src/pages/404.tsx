import Header from "../components/ui/Header";
import Helmet from "../components/ui/Helmet";
import Section from "../components/ui/Section";
import { TiArrowBack } from "react-icons/ti";

export default function PageNotFound() {
   return (
      <>
         <Helmet title="Not Found | Jelupang Jaya Pasir" />
         <Header title="404" />
         <Section id="404" className="py-7 ">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
               <h1>Halaman Tidak Ditemukan</h1>
               <a href="/" className="btn btn-primary">
                  <TiArrowBack className="me-2" size={30} />
                  <span>Kembali</span>
               </a>
            </div>
         </Section>
      </>
   );
}
