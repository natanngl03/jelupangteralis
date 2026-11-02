import { Fragment, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Spinner from "./Spinner";
import VideoThumbnail from "./VideoThumbnail";

export default function VideoModal({ videoID }: { videoID: string }) {
   const [play, setPlay] = useState<boolean>(false);
   const [videoLoading, setVideoLoading] = useState<boolean>(true);

   const toggle = () => {
      setPlay((play) => !play);
   };

   return (
      <Fragment>
         <VideoThumbnail toggle={toggle} videoID={videoID} />
         <Modal isOpen={play} toggle={toggle} centered>
            <ModalHeader toggle={toggle}>Video Player</ModalHeader>
            <ModalBody>
               {play && (
                  <>
                     {videoLoading && <Spinner />}

                     <iframe
                        src={`https://www.youtube.com/embed/${videoID}?autoplay=1&controls=1`}
                        title="YouTube video player"
                        loading="lazy"
                        style={{
                           display: videoLoading ? "hidden" : "block",
                           width: "100%",
                           height: "300px",
                        }}
                        onLoad={() => setVideoLoading(false)}
                        allow="autoplay; encrypted-media; picture-in-picture"
                        allowFullScreen
                     ></iframe>
                  </>
               )}
            </ModalBody>
            <ModalFooter>
               <Button color="secondary" onClick={toggle}>
                  Tutup
               </Button>
            </ModalFooter>
         </Modal>
      </Fragment>
   );
}
