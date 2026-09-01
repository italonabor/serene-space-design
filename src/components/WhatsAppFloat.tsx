export const WHATSAPP_URL =
  "https://wa.me/5519984303943?text=Ol%C3%A1%2C%20Dra.%20Nayara!%20Gostaria%20de%20agendar%20uma%20consulta.";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar pelo WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-transform duration-500 hover:scale-110"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg viewBox="0 0 32 32" className="h-8 w-8" fill="#FFFFFF" aria-hidden="true">
        <path d="M16.04 3C9.4 3 4 8.4 4 15.04c0 2.13.56 4.2 1.62 6.03L4 29l8.13-1.58a12.02 12.02 0 0 0 3.9.66h.01C22.68 28.08 28 22.68 28 16.04 28 8.4 22.68 3 16.04 3zm0 22.03c-1.2 0-2.38-.2-3.5-.6l-.25-.09-4.83.94.98-4.7-.16-.26a9.94 9.94 0 0 1-1.53-5.28c0-5.5 4.48-9.98 10-9.98 5.5 0 9.97 4.48 9.97 9.98 0 5.51-4.47 9.99-9.98 9.99zm5.48-7.47c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.68.15s-.78.97-.95 1.17c-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.07-.8.38-.28.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.71.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35z" />
      </svg>
    </a>
  );
}
