import Counter from "../ui/Counter";
import Section from "../ui/Section";

export default function ExperienceDivider() {
   return (
      <Section id="counter" className="bg-primary py-5">
         <div className="d-flex flex-column flex-lg-row justify-content-lg-between gap-5 gap-lg-0">
            <div className="text-white fw-bold text-center ">
               <Counter end={11} suffix="+" />
               <p className="m-0">Tahun Pengalaman</p>
            </div>
            <div className="text-white fw-bold text-center">
               <Counter end={2000} suffix="+" />
               <p className="m-0">Happy Customer</p>
            </div>
            <div className="text-white fw-bold text-center">
               <Counter end={1000} suffix="+" />
               <p className="m-0">Done Project</p>
            </div>
         </div>
      </Section>
   );
}
