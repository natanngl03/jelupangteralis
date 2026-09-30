import { useState } from "react";
import Section from "../ui/Section";
import { Accordion, AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";
import Data from "./data.json";

export default function Faq() {
   const [open, setOpen] = useState<string>("1");

   const toggle = (id: string) => {
      if (open === id) {
         setOpen("");
      } else {
         setOpen(id);
      }
   };

   return (
      <Section id="faq" className="py-7 border-bottom">
         <div className="row ">
            <div className="col-12 col-lg-5">
               <h2 className="text-center text-lg-start wow fadeInDown" data-wow-delay="0.1s">
                  Yang Sering Ditanyakan?
               </h2>
               <p className="mb-4 text-center text-lg-start wow fadeInDown" data-wow-delay="0.2s">
                  Berikut adalah hal-hal yang paling sering ditanyakan ke kami
               </p>
               <img
                  src="/img/question.svg"
                  alt="question image"
                  width="80%"
                  className="d-block mx-auto m-lg-0 wow fadeInLeft"
                  data-wow-delay="0.3s"
               />
            </div>
            <div className="col-12 col-lg-7">
               <Accordion open={open} toggle={toggle} className="pt-5 pt-lg-0">
                  {Data.map((item, idx) => (
                     <AccordionItem key={idx} className="wow fadeIn" data-wow-delay={`0.1s`}>
                        <AccordionHeader targetId={`${idx + 1}`}>{item.question}</AccordionHeader>
                        <AccordionBody accordionId={`${idx + 1}`}>{item.answer}</AccordionBody>
                     </AccordionItem>
                  ))}
               </Accordion>
            </div>
         </div>
      </Section>
   );
}
