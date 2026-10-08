const fallbackNumber = '6282174635218';

export const WHATSAPP_NUMBER = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || fallbackNumber).replace(/\D/g, '');
export const WHATSAPP_DISPLAY = process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || '0821 7463 5218';

export const openWhatsApp = (message: string) => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, '_blank', 'noopener,noreferrer');
};
