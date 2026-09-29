type Props = { children: React.ReactNode; title?: string; id: string; className?: string };

export default function Section({ children, title, id, className = "" }: Props) {
   return (
      <section id={id} className={className}>
         <div className="container">
            {title && <h2 className="text-primary text-center py-5 display-6 fw-bold">{title}</h2>}
            {children}
         </div>
      </section>
   );
}
