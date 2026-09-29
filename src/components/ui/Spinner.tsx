export default function Spinner() {
   return (
      <div
         style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
         }}
      >
         <div className="spinner-border text-primary fs-2" role="status">
            <span className="visually-hidden">Loading...</span>
         </div>
      </div>
   );
}
