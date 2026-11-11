export default function WhatsAppButton() {
  return (
    <a
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-3.5 rounded-full shadow-[0_12px_32px_-8px_rgba(122,31,61,0.2),0_4px_12px_-2px_rgba(43,43,43,0.12)] hover:scale-105 transition-transform flex items-center gap-2 pr-5 cursor-pointer"
      href="https://wa.me/919876543210"
      rel="noopener noreferrer"
      target="_blank"
    >
      <span className="material-symbols-outlined text-2xl">support_agent</span>
      <span className="font-label-md text-label-md tracking-wider uppercase font-semibold text-white">
        Weave Concierge
      </span>
    </a>
  );
}

