import videos from "../../json/videos.json";
import VideoModal from "../ui/VideoModal";

export default function VideoGallery() {
   return (
      <div className="row g-3">
         {videos.map((item, idx) => (
            <div className="col-6 col-lg-3 " data-aos="fade-in" data-aos-delay="100" key={idx}>
               <VideoModal videoID={item} />
            </div>
         ))}
      </div>
   );
}
