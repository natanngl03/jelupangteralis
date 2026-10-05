import { Fragment, useState, useEffect, useRef } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { FaYoutube } from "react-icons/fa";
import Spinner from "./Spinner";

export default function VideoModal({ videoID }: { videoID: string }) {
   const [play, setPlay] = useState<boolean>(false);
   const [videoLoading, setVideoLoading] = useState<boolean>(true);
   const [thumbnailLoading, setThumbnailLoading] = useState<boolean>(true);
   const thumbnailRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      const img = thumbnailRef.current;

      if (!img) return;

      if (img.complete) {
         setThumbnailLoading(false);
      }
   }, []);

   const toggle = () => {
      setPlay((play) => !play);
   };

   return (
      <Fragment>
         <div className="position-relative" onClick={toggle} style={{ cursor: "pointer" }}>
            <img
               ref={thumbnailRef}
               src={`https://img.youtube.com/vi/${videoID}/mqdefault.jpg`}
               alt="video thumbnail"
               width="100%"
               className="rounded"
               loading="lazy"
               onLoad={() => setThumbnailLoading(false)}
               onError={() => setThumbnailLoading(false)}
            />

            {thumbnailLoading ? (
               <Spinner />
            ) : (
               <FaYoutube
                  className="text-danger rounded bg-white"
                  size={30}
                  style={{
                     position: "absolute",
                     top: "50%",
                     left: "50%",
                     transform: "translate(-50%, -50%)",
                  }}
               />
            )}
         </div>
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
