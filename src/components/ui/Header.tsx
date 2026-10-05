export default function Header({ title }: { title: string }) {
   return (
      <div className="header-wrapper wow fadeIn" data-wow-delay="0.1s">
         <img src="/img/header.webp" alt="header image" width="100%" height="200px" loading="eager" />
         <div className="title-wrapper">
            <h1 className="title text-white wow fadeInDown text-center" data-wow-delay="0.2s" dangerouslySetInnerHTML={{ __html: title }} />
         </div>
      </div>
   );
}
