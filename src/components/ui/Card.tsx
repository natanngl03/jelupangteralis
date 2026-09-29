import { IoLogoWhatsapp } from "react-icons/io5";
import { waOrder } from "../../lib/helper";

type Props = {
   title: string;
   description: string;
   imgSrc: string;
};

export default function Card({ title, description, imgSrc }: Props) {
   return (
      <div className="card">
         <img src={imgSrc} className="card-img-top" alt="..." style={{ height: "200px", backgroundSize: "cover" }} loading="lazy" />

         <div className="card-body d-flex flex-column gap-2">
            <div className="d-flex flex-column gap-2">
               <h3 className="card-title fs-5">{title}</h3>

               <p className="card-text" style={{ fontSize: "14px", height: "90px", overflowY: "auto" }}>
                  {description}
               </p>
            </div>
            <a
               href={waOrder(title)}
               className="btn btn-primary mt-2 d-flex align-items-center justify-content-center gap-2"
               style={{ width: "100%" }}
               target="_blank"
               rel="noopener noreferrer"
            >
               <span>Tanyakan</span>
               <IoLogoWhatsapp className="fs-4" />
            </a>
         </div>
      </div>
   );
}
