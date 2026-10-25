export default function Header({ title }: { title: string }) {
   return (
      <div className="header-wrapper" data-aos="fade-in" data-aos-delay="100">
         <img src="/img/header.webp" alt="header image" width="100%" height="100%" />
         <div className="title-wrapper">
            <h1 className="title text-white text-center" dangerouslySetInnerHTML={{ __html: title }} data-aos="fade-up" data-aos-delay="200" />
         </div>
      </div>
   );
}
