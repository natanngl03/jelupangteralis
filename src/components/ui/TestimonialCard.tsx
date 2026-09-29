import React from "react";
import { FaStar } from "react-icons/fa";

export default function TestimonialCard() {
   return (
      <div className="card gap-2 align-items-center p-2" style={{ maxWidth: "300px" }}>
         <img src="https://demo.htmlcodex.com/3940/Lawfice/img/testimonial-2.jpg" alt="" width="50px" height="50px" className="rounded-circle" />
         <p className="text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea placeat, quos in sunt nulla beatae aperiam voluptate impedit temporibus
            expedita laboriosam magni doloremque ratione quidem?
         </p>

         <div>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
         </div>

         <p>Roy</p>
      </div>
   );
}
