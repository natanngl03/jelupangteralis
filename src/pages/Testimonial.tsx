import Header from "../components/ui/Header";
import TestimonialSection from "../components/Testimonial/Testimonial";
import { Helmet } from "react-helmet";

export default function Testimonial() {
   return (
      <>
         <Helmet title="Testimonial | Jelupang Jaya Pasir" />
         <Header title="Testimonial" />
         <TestimonialSection />
      </>
   );
}
