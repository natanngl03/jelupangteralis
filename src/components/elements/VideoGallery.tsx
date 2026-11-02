import videos from "../../json/videos.json";
import VideoModal from "../ui/VideoModal";
import { motion } from "motion/react";

export default function VideoGallery() {
   return (
      <div className="row g-3">
         {videos.map((item, idx) => (
            <motion.div
               className="col-6 col-lg-3 "
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true, amount: 0.2 }}
               transition={{ duration: 0.7, ease: "easeInOut" }}
               key={idx}
            >
               <VideoModal videoID={item} />
            </motion.div>
         ))}
      </div>
   );
}
