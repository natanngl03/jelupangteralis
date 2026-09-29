import "./style.css";
import { waConsult } from "../../../lib/helper";
import { FaWhatsapp } from "react-icons/fa";

export default function WaButton() {
   return (
      <a className="btn btn-success text-white wa-btn" href={waConsult()} target="_blank" rel="noopener noreferrer" id="waBtn">
         <FaWhatsapp size={30} className="m-0 p-0" />
      </a>
   );
}
