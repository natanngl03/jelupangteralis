const waPhone = `https://wa.me/6282253442031?text=Hallo%20Jelupang%20Jaya%20Teralis,`;

export const waConsult = () => {
   const consultMsg = `%20Saya%20Ingin%20Konsultasi`;
   return waPhone + consultMsg;
};

export const waOrder = (plan: string) => {
   const msg = plan?.trim()?.replaceAll(" ", "%20");
   const orderMsg = `%20saya%20tertarik%20pembuatan%20${msg}`;

   return waPhone + orderMsg;
};
