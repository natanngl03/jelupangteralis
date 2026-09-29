import Section from "../ui/Section";
import Card from "../ui/Card";

const data = [
   {
      title: "Kanopi",
      description: "Pembuatan Kanopi Kokoh dan Elegan untuk Melindungi serta Mempercantik Hunian Anda",
      imgSrc: "/img/kanopi.jpg",
   },
   { title: "Teralis", description: "Pembuatan Teralis Berkualitas untuk Keamanan dan Keindahan Rumah Anda", imgSrc: "/img/teralis.jpg" },
   {
      title: "Railing Tangga",
      description: "Pembuatan Railing Tangga Kokoh dan Elegan untuk Keamanan dan Keindahan Hunian Anda",
      imgSrc: "/img/railing.jpg",
   },
   {
      title: "Tangga Putar",
      description: "Pembuatan Tangga Putar Kokoh dan Elegan untuk Memaksimalkan Ruang dan Mempercantik Hunian",
      imgSrc: "/img/tangga_putar.jpg",
   },
   { title: "Pagar", description: "Pembuatan pagar kokoh dan elegan untuk keamanan serta keindahan rumah", imgSrc: "/img/pagar.jpg" },
   {
      title: "Pintu Besi",
      description: "Pembuatan pintu besi berkualitas dengan desain sesuai kebutuhan Anda",
      imgSrc: "/img/pintu_besi.jpg",
   },
   { title: "Gerbang", description: "Pembuatan gerbang kuat dan stylish untuk mempercantik tampilan hunian", imgSrc: "/img/gerbang.jpg" },
   {
      title: "Balkon",
      description: "Pembuatan balkon kokoh dan elegan untuk menambah kenyamanan serta keindahan hunian",
      imgSrc: "/img/balkon.jpg",
   },
   {
      title: "Plafon PVC",
      description: "Pemasangan plafon PVC rapi dan modern untuk tampilan interior yang lebih menarik",
      imgSrc: "/img/plavon_pvc.jpg",
   },
   {
      title: "Kusen",
      description: "Pembuatan kusen aluminium rapi dan berkualitas dengan desain sesuai kebutuhan",
      imgSrc: "/img/kusen_aluminium.jpg",
   },
   {
      title: "Layanan Kustom",
      description: "Pembuatan berbagai kebutuhan besi dan aluminium sesuai desain, ukuran, dan keinginan Anda",
      imgSrc: "/img/kustom.jpg",
   },
];

export default function Service({ withoutTitle }: { withoutTitle?: boolean }) {
   return (
      <Section id="service" className="py-6 py-lg-7 border-bottom ">
         {!withoutTitle && (
            <h2 className="mb-5 text-center text-primary">
               Temukan Layanan <span className="text-secondary">Kami</span>
            </h2>
         )}

         <div className="row g-2 g-lg-4">
            {data.map((item, idx) => (
               <div className="col-6 col-lg-3" key={idx}>
                  <Card {...item} />
               </div>
            ))}
         </div>
      </Section>
   );
}
