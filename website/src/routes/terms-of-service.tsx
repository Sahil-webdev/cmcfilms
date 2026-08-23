import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Terms of Service — CMC FILMS";
const description = "Terms governing the use of the CMC FILMS website and enquiries for wedding photography and cinema services.";

const sections = [
  {
    heading: "Using this website",
    copy: "This website is provided to help you discover CMC FILMS and enquire about wedding photography, cinematography, and related visual storytelling services. Please use it lawfully and do not interfere with its security, availability, or content.",
  },
  {
    heading: "Enquiries and availability",
    copy: "An enquiry, discussion, estimate, or package indication does not reserve a date or create a confirmed booking. A booking is confirmed only when CMC FILMS has accepted it under a written agreement and the required booking payment has been received.",
  },
  {
    heading: "Packages, quotes and services",
    copy: "Services, deliverables, timelines, travel requirements, pricing, and payment schedules are confirmed for each celebration in the applicable proposal or client agreement. CMC FILMS may update website content and package information without notice.",
  },
  {
    heading: "Client responsibilities",
    copy: "Clients are responsible for providing accurate event information, securing venue permissions where needed, and communicating any restrictions that may affect photography or filming. Timing, weather, venue conditions, and guest cooperation can affect the final coverage.",
  },
  {
    heading: "Creative work and intellectual property",
    copy: "All website content, including photographs, films, designs, text, logos, and graphics, belongs to CMC FILMS or is used with permission. It may not be copied, downloaded, reproduced, or used commercially without written permission.",
  },
  {
    heading: "Third-party services",
    copy: "Links to Instagram, YouTube, WhatsApp, maps, and other third-party platforms are provided for convenience. CMC FILMS is not responsible for the content, availability, or policies of those services.",
  },
  {
    heading: "Liability and updates",
    copy: "We work to keep this website accurate and available, but it is provided on an as-is basis. To the extent permitted by law, CMC FILMS is not liable for losses arising solely from use of this website. We may revise these terms as the website or services evolve.",
  },
];

export const Route = createFileRoute("/terms-of-service")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/terms-of-service" }],
  }),
  component: TermsOfServicePage,
});

function TermsOfServicePage() {
  return (
    <main className="bg-[#FAF8F5] px-5 pb-20 pt-36 text-[#171717] sm:px-10 sm:pt-44">
      <article className="mx-auto max-w-4xl">
        <Link to="/" className="text-xs font-poppins font-semibold uppercase tracking-[0.16em] text-[#C47A65] hover:underline">
          CMC FILMS
        </Link>
        <h1 className="mt-5 font-montserrat text-4xl font-extrabold tracking-tight sm:text-6xl">Terms of Service</h1>
        <p className="mt-5 font-poppins text-sm leading-relaxed text-[#55504A] sm:text-base">
          These terms explain the use of the CMC FILMS website and the general process for enquiring about our studio services.
        </p>
        <p className="mt-4 border-b border-[#D8D3CB] pb-8 text-xs font-poppins font-semibold uppercase tracking-[0.12em] text-[#68645E]">
          Last updated: 23 August 2026
        </p>

        <div className="mt-10 divide-y divide-[#D8D3CB] border-y border-[#D8D3CB]">
          {sections.map((section, index) => (
            <section key={section.heading} className="grid gap-3 py-7 sm:grid-cols-[3.5rem_1fr] sm:gap-6 sm:py-9">
              <span className="font-poppins text-xs font-semibold tracking-[0.12em] text-[#C47A65]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="font-league text-xl font-bold sm:text-2xl">{section.heading}</h2>
                <p className="mt-3 font-poppins text-sm leading-relaxed text-[#55504A] sm:text-base">{section.copy}</p>
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10 border-l-2 border-[#C47A65] pl-5 sm:pl-7">
          <h2 className="font-league text-xl font-bold sm:text-2xl">Questions about a booking?</h2>
          <p className="mt-3 font-poppins text-sm leading-relaxed text-[#55504A] sm:text-base">
            Contact CMC FILMS at <a className="text-[#171717] underline" href="mailto:cmcfilms771@gmail.com">cmcfilms771@gmail.com</a> or +91 74259 40636. Your signed client agreement will govern any confirmed booking.
          </p>
        </section>
      </article>
    </main>
  );
}
