export default function Header({ title }: { title: string }) {
   return (
      <div className="header-wrapper wow fadeIn" data-wow-delay="0.1s">
         <img src="/img/header.webp" alt="header image" width="100%" height="200px" loading="eager" />
         <div className="title-wrapper">
            <h1 className="title text-white wow fadeInDown" data-wow-delay="0.2s">
               {title}
            </h1>
         </div>
      </div>
   );
}
