import Header from "../components/ui/Header";
import TestimonialSection from "../components/Testimonial/Testimonial";
import { Head } from "vite-react-ssg";

export default function Testimonial() {
   return (
      <>
         <Head>
            <title>Testimonial | Jelupang Jaya Teralis</title>
         </Head>
         <Header title="Testimonial" />
         <TestimonialSection />
      </>
   );
}
