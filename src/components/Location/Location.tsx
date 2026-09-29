import Section from "../ui/Section";

export default function Location() {
   return (
      <Section id="location" className="py-7">
         <h2 className="mb-5 text-center text-primary">
            Lokasi <span className="text-secondary">Kami</span>
         </h2>
         <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9541308373077!2d106.67300337370075!3d-6.2697629613752515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb875d3dee4d%3A0x2335a060113d196c!2sJelupang%20Jaya%20Teralis!5e0!3m2!1sid!2sid!4v1790502496481!5m2!1sid!2sid"
            width="100%"
            height="450"
            style={{
               border: 0,
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
         ></iframe>
      </Section>
   );
}
