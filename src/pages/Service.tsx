import Header from "../components/ui/Header";
import ServiceSection from "../components/Service/Service";
import HowToOrder from "../components/HowToOrder/HowToOrder";
import { Helmet } from "react-helmet";

export default function Service() {
   return (
      <>
         <Helmet title="Layanan | Jelupang Jaya Pasir" />
         <Header title="Layanan Kami" />
         <ServiceSection withoutTitle />
         <HowToOrder />
      </>
   );
}
