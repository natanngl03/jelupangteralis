export default function Header({ title }: { title: string }) {
   return (
      <div className="header-wrapper">
         <img src="/img/header.webp" alt="header image" width="100%" height="100%" />
         <div className="title-wrapper">
            <h1 className="title text-white text-center" dangerouslySetInnerHTML={{ __html: title }} data-aos="fade-in" data-aos-delay="200" />
         </div>
      </div>
   );
}
