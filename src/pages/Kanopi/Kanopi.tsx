import { motion } from "motion/react";
import MasonryGrid from "../../components/ui/MasonryGrid";
import Header from "../../components/ui/Header";
import ExperienceDivider from "../../components/elements/ExperienceDivider";
import HowToOrder from "../../components/elements/HowToOrder";
import KanopiJson from "../../json/kanopi.json";
import Testimonial from "../../components/elements/Testimonial";
import { Head } from "vite-react-ssg";

export default function Kanopi() {
   return (
      <>
         <Head>
            <title>Produk Kanopi | Jelupang Jaya Kanopi</title>
         </Head>
         <Header title="Kanopi" />
         <div className="container py-7">
            <KanopiItem />
         </div>
         <ExperienceDivider />
         <HowToOrder />
         <Testimonial />
      </>
   );
}

export const KanopiItem = () => {
   return (
      <MasonryGrid className="row g-2 g-lg-4">
         {KanopiJson.map((item, idx) => (
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: Number(`0.7${idx}`), ease: "easeInOut" }}
               className="col-6 col-lg-4 masonry-item"
               key={idx}
            >
               <KanopiCard title={item.title} imgSrc={item.cardImg} alt={item.page} href={`/kanopi/${item.page}`} price={item.price} />
            </motion.div>
         ))}
      </MasonryGrid>
   );
};

export const KanopiCard = (props: { title: string; imgSrc: string; alt: string; href: string; price: string }) => {
   return (
      <div className="card">
         <img src={props.imgSrc} className="card-img-top" alt={props.alt} />
         <div className="card-body gap-2">
            <h2 className="fs-6 text-center " dangerouslySetInnerHTML={{ __html: props.title }} />

            <p className="text-center text-secondary card-price">
               Harga Mulai Dari: <br />
               <span className="fw-bold price">{props.price}</span>
            </p>
            <a href={props.href} className="btn btn-primary w-100">
               Lihat
            </a>
         </div>
      </div>
   );
};
