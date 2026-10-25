import Header from "../components/ui/Header";
import TestimonialSection from "../components/elements/Testimonial";
import { Head } from "vite-react-ssg";

export default function Testimonial() {
   return (
      <>
         <Head>
            <title>Testimonial | Jelupang Jaya Kanopi</title>
         </Head>
         <Header title="Testimonial" />
         <TestimonialSection />
      </>
   );
}
