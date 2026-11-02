import { motion } from "motion/react";

export default function Fallback() {
   return (
      <motion.div
         style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 99999,
            background: "#fff",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
         }}
         initial={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.6, ease: "easeInOut" }}
      >
         <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
         <p className="fst-italic">Loading...</p>
      </motion.div>
   );
}
