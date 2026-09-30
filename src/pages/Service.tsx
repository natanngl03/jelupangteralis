import Header from "../components/ui/Header";
import ServiceSection from "../components/Service/Service";
import HowToOrder from "../components/HowToOrder/HowToOrder";
import { Head } from "vite-react-ssg";

export default function Service() {
   return (
      <>
         <Head>
            <title>Layanan Kami | Jelupang Jaya Teralis</title>
         </Head>
         <Header title="Layanan Kami" />
         <ServiceSection withoutTitle />
         <HowToOrder />
      </>
   );
}
