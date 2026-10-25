import React from "react";

type Props = {
   title: string;
   price: string;
   imgComp: React.ReactNode;
   desc?: string;
   spec?: string[];
   variant?: string[];
   bgColor?: string;
   orderImg?: string;
   orderDesc?: string;
};

export default function ProductCard(props: Props) {
   const { bgColor = "var(--bs-gray-200)", orderImg, orderDesc } = props;
   return (
      <div
         className="row border border-primary rounded-3 pb-4 g-4"
         style={{
            background: bgColor,
         }}
      >
         <div className="col-12">
            <h2
               className="text-center mb-2"
               dangerouslySetInnerHTML={{
                  __html: props.title,
               }}
            />
         </div>
         <div className={`col-12 col-lg-6 ${orderImg}`}>{props.imgComp}</div>
         <div className={`col-12 col-lg-6 ${orderDesc}`}>
            <div className="h-100 d-flex flex-column justify-content-between gap-4 gap-lg-0">
               {props?.desc && <p>{props?.desc}</p>}

               {props?.spec && props.spec?.length > 0 && (
                  <div>
                     <p className="m-0">Spesifikasi :</p>

                     <ul>
                        {props?.spec?.map((item, idx) => (
                           <li key={idx}>{item}</li>
                        ))}
                     </ul>
                  </div>
               )}

               {props?.variant && props.variant?.length > 0 && (
                  <div>
                     <p className="m-0">Variant:</p>

                     <ul>
                        {props?.variant?.map((item, idx) => (
                           <li key={idx}>{item}</li>
                        ))}
                     </ul>
                  </div>
               )}

               <div className="d-flex flex-column gap-3  text-center text-lg-start">
                  <div>
                     <p className="m-0 fw-bold">Harga Mulai Dari:</p>
                     <p className="mb-3 fw-bold fs-3">{props.price}</p>
                  </div>

                  <div className="btn btn-primary w-100">Konsultasi</div>
               </div>
            </div>
         </div>
      </div>
   );
}
