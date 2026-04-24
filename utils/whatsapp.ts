export const WHATSAPP_NUMBER = "2348066199860";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export const getWhatsAppLink = (message?: string) => {
  if (!message) return WHATSAPP_LINK;
  return `${WHATSAPP_LINK}?text=${encodeURIComponent(message)}`;
};
