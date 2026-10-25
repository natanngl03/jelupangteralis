import { Head } from "vite-react-ssg";
import Header from "../components/ui/Header";
import Section from "../components/ui/Section";
import VideoGallery from "../components/elements/VideoGallery";

export default function Videos() {
   return (
      <>
         <Head>
            <title>Video Gallery | Jelupang Jaya Kanopi</title>
         </Head>
         <Header title="Video Gallery" />
         <Section id="video_gallery" className="py-7">
            <VideoGallery />
         </Section>
      </>
   );
}
