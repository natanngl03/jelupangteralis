import { videos } from "./data.json";
import VideoModal from "../ui/VideoModal";

export default function VideoGallery() {
   return (
      <div className="row g-3">
         {videos.map((item, idx) => (
            <div className="col-6 col-lg-3 wow fadeIn" data-wow-delay={`{0.${idx + 1}s}`}>
               <VideoModal videoID={item} key={idx} />
            </div>
         ))}
      </div>
   );
}
