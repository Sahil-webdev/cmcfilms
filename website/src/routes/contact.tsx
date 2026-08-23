import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { studio } from "@/lib/site-data";
import img from "@/assets/story-1.jpg";

const title = "Tell Us Your Story — Contact CMC FILMS";
const description =
  "Enquire about wedding photography and cinematic films with CMC FILMS. Share your dates, venue and story.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

const fields = [
  { name: "name", label: "Your Name", type: "text", required: true },
  { name: "partner", label: "Partner's Name", type: "text" },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "phone", label: "Phone", type: "tel" },
  { name: "date", label: "Wedding Date", type: "date" },
  { name: "city", label: "Wedding City", type: "text" },
  { name: "venue", label: "Venue", type: "text" },
  { name: "eventType", label: "Event Type", type: "text" },
  { name: "referral", label: "How Did You Find Us?", type: "text" },
] as const;

function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (!data.get("name") || !data.get("email")) {
      setError("Please share at least your name and email.");
      return;
    }
    setError(null);
    setSent(true);
  };

  return (
    <main className="grid min-h-screen md:grid-cols-2">
      <div className="relative hidden md:block">
        <img src={img} alt="Bride before the ceremony" className="h-full w-full object-cover md:sticky md:top-0 md:h-screen" />
      </div>

      <div className="bg-ivory px-5 py-32 md:px-14 md:py-40">
        <span className="label-xs text-gold">Enquiries</span>
        <h1 className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.98]">
          Tell Us Your Story
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
          Share a little about your celebration. We reply personally, usually within two days.
        </p>

        {sent ? (
          <div className="mt-14 border border-gold/50 p-10 animate-fade-in">
            <p className="font-display text-3xl">Thank you.</p>
            <p className="mt-4 text-sm text-muted-foreground">
              Your enquiry is with us. We'll be in touch at the email you shared.
            </p>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="mt-10 space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              {fields.map((f) => (
                <div key={f.name} className="space-y-1.5">
                  <label className="block text-[11px] font-mono uppercase tracking-[0.16em] text-[#261E1E]/80 font-bold">
                    {f.label}
                    {"required" in f && f.required ? <span className="text-[#922A2F]"> *</span> : null}
                  </label>
                  <input
                    name={f.name}
                    type={f.type}
                    required={"required" in f ? f.required : false}
                    className="w-full bg-white border border-[#261E1E]/15 rounded-xl px-4 py-3 text-xs sm:text-sm text-[#261E1E] placeholder:text-[#261E1E]/35 outline-none transition-all duration-300 focus:border-[#922A2F] focus:ring-2 focus:ring-[#922A2F]/10 shadow-2xs"
                  />
                </div>
              ))}
            </div>

            <div className="space-y-1.5">
              <label className="block text-[11px] font-mono uppercase tracking-[0.16em] text-[#261E1E]/80 font-bold">Tell Us About Your Story</label>
              <textarea
                name="story"
                rows={4}
                placeholder="Tell us about your celebration, functions, or vision..."
                className="w-full bg-white border border-[#261E1E]/15 rounded-2xl p-4 text-xs sm:text-sm text-[#261E1E] placeholder:text-[#261E1E]/35 outline-none transition-all duration-300 focus:border-[#922A2F] focus:ring-2 focus:ring-[#922A2F]/10 shadow-2xs resize-none"
              />
            </div>

            {error && <p className="text-xs font-mono text-red-600 bg-red-50 p-3 rounded-lg border border-red-200">{error}</p>}

            <button
              type="submit"
              className="bg-[#261E1E] hover:bg-[#922A2F] text-white px-9 py-3.5 rounded-full font-sans text-xs font-semibold uppercase tracking-[0.2em] transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
            >
              Send Enquiry
            </button>
          </form>
        )}

        <div className="label-xs mt-20 flex flex-wrap gap-x-8 gap-y-3 border-t border-border pt-8 text-taupe">
          <a href={`mailto:${studio.email}`} className="link-underline">{studio.email}</a>
          <span>{studio.phone}</span>
          <span>{studio.city}</span>
        </div>
      </div>
    </main>
  );
}
