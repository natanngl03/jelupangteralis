export default function Card({ imgSrc }: { imgSrc: string }) {
   return (
      <div className="card ">
         <img src={imgSrc} className="card-img-top overflow-hidden" alt="..." style={{ height: "200px", backgroundSize: "cover" }} loading="lazy" />
      </div>
   );
}
