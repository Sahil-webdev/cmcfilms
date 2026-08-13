import { Link } from "@tanstack/react-router";
import { navLinks, studio } from "@/lib/site-data";
import filmstrip from "@/assets/featured.jpg";

export function Footer() {
  return (
    <footer className="grain relative overflow-hidden bg-cinema text-ivory">
      <img
        src={filmstrip}
        alt=""
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full object-cover opacity-15"
        loading="lazy"
      />
      <div className="relative mx-auto max-w-[1600px] px-5 py-24 md:px-10 md:py-32">
        <span className="label-xs text-gold">{studio.name}</span>
        <h2 className="mt-8 font-display text-[clamp(2.75rem,8vw,7rem)] leading-[0.95]">
          Stories of Love.
          <br />
          <span className="italic text-taupe">Told Forever.</span>
        </h2>

        <div className="mt-20 grid gap-12 border-t border-ivory/10 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="label-xs text-taupe">Navigate</p>
            <ul className="mt-5 space-y-2">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="link-underline font-display text-xl">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-xs text-taupe">Contact</p>
            <ul className="mt-5 space-y-2 text-sm text-ivory/80">
              <li>
                <a href={`mailto:${studio.email}`} className="link-underline">
                  {studio.email}
                </a>
              </li>
              <li>{studio.phone}</li>
              <li>{studio.city}</li>
            </ul>
          </div>
          <div>
            <p className="label-xs text-taupe">Follow</p>
            <ul className="mt-5 space-y-2 text-sm text-ivory/80">
              {studio.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="link-underline">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="label-xs text-taupe">Enquiries</p>
            <p className="mt-5 text-sm leading-relaxed text-ivory/70">
              Dates are limited each season. Tell us about your celebration and we will reply
              personally.
            </p>
            <Link to="/contact" className="label-xs mt-6 inline-block border border-ivory/30 px-6 py-3 transition-colors hover:bg-ivory hover:text-cinema">
              Tell Us Your Story
            </Link>
          </div>
        </div>

        <div className="label-xs mt-16 flex flex-wrap items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-taupe">
          <span>© {new Date().getFullYear()} CMC FILMS</span>
          <span className="flex gap-6">
            <a href="#" className="link-underline">Privacy Policy</a>
            <a href="#" className="link-underline">Terms</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
