import Header from "../components/ui/Header";
import Section from "../components/ui/Section";
import { TiArrowBack } from "react-icons/ti";
import { Head } from "vite-react-ssg";

export default function PageNotFound() {
   return (
      <>
         <Head>
            <title>Not Found | Jelupang Jaya Kanopi</title>
         </Head>
         <Header title="404" />
         <Section id="404" className="py-7 ">
            <div className="d-flex flex-column justify-content-center align-items-center gap-2">
               <h2>Halaman Tidak Ditemukan</h2>
               <a href="/" className="btn btn-primary">
                  <TiArrowBack className="me-2" size={30} />
                  <span>Kembali</span>
               </a>
            </div>
         </Section>
      </>
   );
}
