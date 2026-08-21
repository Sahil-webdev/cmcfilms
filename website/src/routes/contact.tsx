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
          <form onSubmit={onSubmit} noValidate className="mt-14 space-y-8">
            <div className="grid gap-8 sm:grid-cols-2">
              {fields.map((f) => (
                <label key={f.name} className="block">
                  <span className="label-xs text-olive">
                    {f.label}
                    {"required" in f && f.required ? <span className="text-gold"> *</span> : null}
                  </span>
                  <input
                    name={f.name}
                    type={f.type}
                    required={"required" in f ? f.required : false}
                    className="mt-3 w-full border-b border-input bg-transparent pb-2 font-display text-xl outline-none transition-colors focus:border-gold"
                  />
                </label>
              ))}
            </div>

            <label className="block">
              <span className="label-xs text-olive">Tell Us About Your Story</span>
              <textarea
                name="story"
                rows={4}
                className="mt-3 w-full resize-none border-b border-input bg-transparent pb-2 font-display text-xl outline-none transition-colors focus:border-gold"
              />
            </label>

            {error && <p className="text-sm text-destructive">{error}</p>}

            <button
              type="submit"
              className="label-xs border border-espresso px-10 py-4 transition-colors duration-500 hover:bg-espresso hover:text-ivory"
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
