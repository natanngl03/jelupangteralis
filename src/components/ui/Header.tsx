export default function Header({ title }: { title: string }) {
   return (
      <div className="header-wrapper">
         <img src="/img/header.webp" alt="header image" width="100%" height="100%" />
         <div className="title-wrapper">
            <h1 className="title text-white">{title}</h1>
         </div>
      </div>
   );
}
