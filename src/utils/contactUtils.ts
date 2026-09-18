import { siteConfig } from '../config/siteConfig';

/**
 * Genera el enlace directo a WhatsApp con texto codificado
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const phone = siteConfig.consultant.whatsappNumber.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(customMessage || siteConfig.consultant.whatsappDefaultMessage);
  return `https://wa.me/${phone}?text=${text}`;
}

/**
 * Retorna la URL de Calendly configurada
 */
export function getCalendlyUrl(): string {
  return siteConfig.consultant.calendlyUrl;
}

/**
 * Retorna el enlace directo mailto
 */
export function getMailtoUrl(subject = 'Consulta sobre servicios de Business Analytics'): string {
  return `mailto:${siteConfig.consultant.email}?subject=${encodeURIComponent(subject)}`;
}
