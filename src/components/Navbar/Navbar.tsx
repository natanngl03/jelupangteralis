import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { Offcanvas, OffcanvasBody, OffcanvasHeader } from "reactstrap";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "reactstrap";
import { FaWhatsapp } from "react-icons/fa";
import { waConsult } from "../../lib/helper";

type MenuType = {
   label: string;
   href: string | Array<{ label: string; href: string }>;
};

const Menu: Array<MenuType> = [
   { label: "Beranda", href: "/" },
   { label: "Tentang", href: "/about" },
   { label: "Layanan", href: "/service" },
   {
      label: "Lainnya",
      href: [
         { label: "Portofolio", href: "/portofolio" },
         { label: "Video Gallery", href: "/videos" },
         { label: "Testimonial", href: "/testimonial" },
         { label: "Pertanyaan", href: "/faq" },
      ],
   },
];

export default function Navbar() {
   const location = useLocation();
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const [currentLocation, setCurrentLocation] = useState<string>("/");

   const logoOnClick = () => {
      window.location.href = "/";
   };

   useEffect(() => {
      const handleCurrentLocation = () => {
         const str = location.pathname;
         const result = str === "/" ? "/" : str.replace(/\/$/, "");
         setCurrentLocation(result);
      };

      handleCurrentLocation();
   }, []);

   return (
      <div className="sticky-top">
         <nav className="bg-white border-bottom">
            <div className="container d-flex align-items-center py-3 py-lg-4">
               <img src="/img/logo.png" alt="" className="navbar-brand" onClick={logoOnClick} />

               <div className="d-none d-lg-block ms-auto mx-lg-auto">
                  <NavMenu location={currentLocation} />
               </div>

               <a href={waConsult()} target="_blank" rel="noopener noreferrer" className="btn btn-primary d-none d-lg-block px-3 py-2 rounded-pill">
                  <FaWhatsapp size={25} className="me-2" />
                  <span>Konsultasi</span>
               </a>
               <RiMenu5Fill className="p-2 d-lg-none ms-auto" size={50} style={{ cursor: "pointer" }} onClick={() => setIsOpen(true)} />
               <Offcanvas isOpen={isOpen} toggle={() => setIsOpen(false)} direction="end">
                  <OffcanvasHeader toggle={() => setIsOpen(false)} className="border-bottom">
                     <img src="/img/logo.png" alt="" className="navbar-brand" />
                  </OffcanvasHeader>
                  <OffcanvasBody>
                     <div className="h-100 d-flex flex-column">
                        <NavMenu onClick={() => setIsOpen(false)} location={currentLocation} />

                        <a href={waConsult()} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-auto rounded-pill">
                           <FaWhatsapp size={25} className="me-2" />
                           <span>Konsultasi</span>
                        </a>
                     </div>
                  </OffcanvasBody>
               </Offcanvas>
            </div>
         </nav>
      </div>
   );
}

const NavMenu = ({ onClick = () => {}, location }: { onClick?: () => void; location: string }) => {
   return (
      <ul className={`p-0 m-0 d-flex flex-column flex-lg-row align-items-lg-center gap-4 list-unstyled`}>
         {Menu.map((item, idx) =>
            item.href && Array.isArray(item.href) ? (
               <li key={idx}>
                  <NavDropdown linkName={item.label} items={item.href} location={location} onClick={onClick} />
               </li>
            ) : (
               <li key={idx}>
                  <a
                     href={item.href}
                     className={`text-decoration-none fw-semibold d-block w-100 ${location === item.href ? "text-secondary" : "text-primary"}`}
                     onClick={onClick}
                  >
                     {item.label}
                  </a>
               </li>
            ),
         )}
      </ul>
   );
};

const NavDropdown = ({
   linkName,
   items,
   location,
   onClick = () => {},
}: {
   linkName: string;
   items: Array<{ label: string; href: string }>;
   location: string;
   onClick: () => void;
}) => {
   const [dropdownOpen, setDropdownOpen] = useState(false);
   const toggle = () => setDropdownOpen((prevState) => !prevState);

   const isActive = () => {
      return items.some((x) => x.href === location);
   };

   return (
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
         <DropdownToggle caret className={`nav-link bg-transparent fw-semibold ${isActive() ? "text-secondary" : "text-primary"}`}>
            {linkName}
         </DropdownToggle>

         <DropdownMenu>
            <DropdownItem header>{linkName}</DropdownItem>
            {items.map((item, idx) => (
               <DropdownItem key={idx} className="btn btn-secondary">
                  <a
                     href={item.href}
                     className={`text-decoration-none fw-semibold d-block w-100 ${item.href == location ? "text-secondary" : "text-primary"}`}
                     onClick={onClick}
                  >
                     {item.label}
                  </a>
               </DropdownItem>
            ))}
         </DropdownMenu>
      </Dropdown>
   );
};
