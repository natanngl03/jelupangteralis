import "./style.css";
import Section from "../ui/Section";
import { FaUserGear, FaMapLocationDot } from "react-icons/fa6";
import { MdAttachMoney } from "react-icons/md";
import { IoIosConstruct, IoMdCall } from "react-icons/io";
import { LuNotebookPen } from "react-icons/lu";

const data = [
   { label: "Konsultasikan Ke <br />Team Kami", icon: <IoMdCall /> },
   { label: "Team Kami Akan <br /> Menganalisa Kebutuhan", icon: <FaUserGear /> },
   { label: "Team Akan Survei <br /> Ke Lokasi", icon: <FaMapLocationDot /> },
   { label: "Perencanaan Konsep, <br />Material Dan Biaya", icon: <LuNotebookPen /> },
   { label: "Pengajuan Total Biaya <br /> Dan Lama Pengerjaan", icon: <MdAttachMoney /> },
   { label: "Proses Pengerjaan <br /> Dimulai", icon: <IoIosConstruct /> },
];

export default function HowToOrder() {
   return (
      <Section id="work" className="py-5 border-bottom bg-white">
         <h2 className="mb-4 mb-lg-5 fw-bold text-primary">Bagaimana Cara Pemesanan?</h2>

         <div className="row">
            {data.map((item, idx) => (
               <div className="col-6 col-lg-4 g-2" key={idx}>
                  <div className="d-flex flex-column flex-lg-row align-items-center gap-2 gap-lg-4 border border-2 rounded border-primary position-relative card-work">
                     <p className="position-absolute top-0 start-0 p-3 bg-primary text-white fw-bold">{idx + 1}</p>
                     <div className="text-center text-lg-end ms-lg-auto me-lg-3 my-auto">
                        <>{item.icon}</>
                        <p
                           className="display-6 fs-6 fw-bold mt-3"
                           dangerouslySetInnerHTML={{
                              __html: item.label,
                           }}
                        />
                     </div>
                  </div>
               </div>
            ))}
         </div>
      </Section>
   );
}
