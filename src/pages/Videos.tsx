import Header from "../components/ui/Header";
import Section from "../components/ui/Section";
import VideoGallery from "../components/Videos/VideoGallery";

export default function Videos() {
   return (
      <>
         <Header title="Video Gallery" />
         <Section id="video_gallery" className="py-7">
            <VideoGallery />
         </Section>
      </>
   );
}
