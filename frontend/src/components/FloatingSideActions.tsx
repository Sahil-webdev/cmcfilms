import { Link } from "@tanstack/react-router";
import { studio } from "@/lib/site-data";

export function FloatingSideActions() {
  const whatsappNumber = studio.phone.replace(/\D/g, "");

  return (
    <div
      aria-label="Quick contact actions"
      className="fixed right-0 top-1/2 z-50 flex flex-col items-end gap-2 -translate-y-1/2 select-none pointer-events-none"
    >
      {/* 1. TOP ENQUIRY FORM TAB (Individually expands on hover) */}
      <Link
        to="/contact"
        hash="enquiry-form"
        aria-label="Enquiry Form"
        title="Enquire For Booking"
        className="pointer-events-auto group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center overflow-hidden rounded-l-xl rounded-r-none bg-[#F48F01] text-white px-3 sm:px-3.5 shadow-lg transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:w-36 sm:hover:w-40 active:scale-95 cursor-pointer"
      >
        <div className="flex items-center gap-3 w-full">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-white transition-transform duration-300 group-hover:scale-105"
          >
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="8" y1="13" x2="16" y2="13" />
            <line x1="8" y1="17" x2="16" y2="17" />
            <line x1="8" y1="9" x2="10" y2="9" />
          </svg>
          <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            Enquiry
          </span>
        </div>
      </Link>

      {/* 2. BOTTOM WHATSAPP TAB (Individually expands on hover) */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        aria-label="WhatsApp Chat"
        title="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex h-11 w-11 sm:h-12 sm:w-12 items-center overflow-hidden rounded-l-xl rounded-r-none bg-[#28B446] text-white px-3 sm:px-3.5 shadow-lg transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:w-36 sm:hover:w-40 active:scale-95 cursor-pointer"
      >
        <div className="flex items-center gap-3 w-full">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-5 w-5 sm:h-6 sm:w-6 shrink-0 text-white transition-transform duration-300 group-hover:scale-105"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
          </svg>
          <span className="font-sans text-xs sm:text-sm font-semibold tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 delay-75">
            WhatsApp
          </span>
        </div>
      </a>
    </div>
  );
}
