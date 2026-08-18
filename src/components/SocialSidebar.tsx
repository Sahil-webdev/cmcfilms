import { Link } from "@tanstack/react-router";
import { studio } from "@/lib/site-data";

/** Floating action sidebar — fixed to the right edge, vertically centered. */
export function SocialSidebar() {
  const whatsappNumber = studio.phone.replace(/\D/g, "");

  return (
    <aside
      aria-label="Quick actions"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 md:flex"
    >
      {/* 1. Enquiry Button */}
      <Link
        to="/contact"
        aria-label="Enquiry"
        title="Enquire For Booking"
        className="social-pill group relative flex items-center justify-center"
        style={{ "--hover-color": "#AE171E" } as React.CSSProperties}
      >
        <svg viewBox="0 0 16 16" className="social-svg" aria-hidden>
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A1 1 0 0 0 3.707 11.293L1 14V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A2 2 0 0 1 5.121 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M4.5 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
        </svg>
      </Link>

      {/* 2. WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber}`}
        aria-label="WhatsApp"
        title="Chat on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
        className="social-pill group relative flex items-center justify-center"
        style={{ "--hover-color": "#25D366" } as React.CSSProperties}
      >
        <svg viewBox="0 0 16 16" className="social-svg" aria-hidden>
          <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
        </svg>
      </a>

      {/* Thin gold vertical line above and below */}
      <span className="h-10 w-px bg-gradient-to-b from-transparent to-gold/60 -mt-1 order-first" />
      <span className="h-10 w-px bg-gradient-to-b from-gold/60 to-transparent order-last" />
    </aside>
  );
}
