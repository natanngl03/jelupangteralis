import Header from "../../components/ui/Header";
import ServiceSection from "../../components/elements/Service";
import HowToOrder from "../../components/elements/HowToOrder";

import { Head } from "vite-react-ssg";
import ExperienceDivider from "../../components/elements/ExperienceDivider";
import Testimonial from "../../components/elements/Testimonial";

export default function Lainnya() {
   return (
      <>
         <Head>
            <title>Layanan Lainnya | Jelupang Jaya Kanopi</title>
         </Head>
         <Header title="Layanan Lainnya" />
         <ServiceSection withTitle={false} />
         <ExperienceDivider />
         <HowToOrder />
         <Testimonial />
      </>
   );
}
