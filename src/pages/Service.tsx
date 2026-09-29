import Header from "../components/ui/Header";
import ServiceSection from "../components/Service/Service";
import HowToOrder from "../components/HowToOrder/HowToOrder";

export default function Service() {
   return (
      <>
         <Header title="Layanan Kami" />
         <ServiceSection withoutTitle />
         <HowToOrder />
      </>
   );
}
