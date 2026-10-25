import Section from "../ui/Section";
import { KanopiItem } from "../../pages/Kanopi/Kanopi";

export default function KanopiSection() {
   return (
      <Section id="portofolio" className="bg-white py-7  border-bottom">
         <h2 className="mb-5 text-center text-primary " data-aos="fade-in" data-aos-delay="100">
            Produk <span className="text-secondary">Kanopi Bergaransi</span> <br /> <span className="text-secondary">Unggulan</span> Kami
         </h2>
         <p className="text-center mb-5" data-aos="fade-in" data-aos-delay="200">
            Kami adalah ahli kanopi yang siap membantu mewujudkan kanopi impian Anda dengan desain menarik, konstruksi kokoh, dan pengerjaan yang
            rapi. Kami melayani berbagai kebutuhan kanopi, mulai dari kanopi minimalis, ekonomis, custom, hingga kanopi modern dengan beragam pilihan
            material dan model.
         </p>
         <KanopiItem />
      </Section>
   );
}
