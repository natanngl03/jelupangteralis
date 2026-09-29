import { Helmet } from "react-helmet";
import Header from "../components/ui/Header";
import Section from "../components/ui/Section";
import VideoGallery from "../components/Videos/VideoGallery";

export default function Videos() {
   return (
      <>
         <Helmet title="Video Gallery | Jelupang Jaya Pasir" />
         <Header title="Video Gallery" />
         <Section id="video_gallery" className="py-7">
            <VideoGallery />
         </Section>
      </>
   );
}
