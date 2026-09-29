import Section from "../ui/Section";

export default function ExperienceDivider() {
   return (
      <Section id="counter" className="bg-primary py-5">
         <div className="d-flex flex-column flex-lg-row justify-content-lg-between gap-5 gap-lg-0">
            <div className="text-white fw-bold text-center">
               <p className="m-0 display-2 fw-bolder">11+</p>
               <p className="m-0">Tahun Pengalaman</p>
            </div>
            <div className="text-white fw-bold text-center">
               <p className="m-0 display-2 fw-bolder">2Rb+</p>
               <p className="m-0">Happy Customer</p>
            </div>
            <div className="text-white fw-bold text-center">
               <p className="m-0 display-2 fw-bolder">1Rb+</p>
               <p className="m-0">Done Project</p>
            </div>
         </div>
      </Section>
   );
}
