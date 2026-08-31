import { createFileRoute, Link } from "@tanstack/react-router";

const title = "Privacy Policy — CMC FILMS";
const description = "How CMC FILMS collects, uses, protects and manages personal information shared through this website.";

const sections = [
  {
    heading: "Information we collect",
    copy: "When you contact CMC FILMS, enquire about a service, or submit a form, we may collect your name, email address, phone number, wedding date, venue, city, event details, package preferences, and the message you choose to share with us.",
  },
  {
    heading: "How we use your information",
    copy: "We use this information to respond to enquiries, understand your celebration, prepare relevant proposals, coordinate photography and filmmaking services, and communicate about your booking. We do not sell your personal information.",
  },
  {
    heading: "Sharing and service providers",
    copy: "Your information is shared only with the CMC FILMS team and trusted providers who help us operate our website, communications, storage, or client services. They may use it only for the work they perform for us.",
  },
  {
    heading: "Photos, films and testimonials",
    copy: "We may feature selected images, films, reviews, or stories from a celebration in our portfolio, website, social channels, and studio materials only in accordance with the understanding or agreement made with the relevant client.",
  },
  {
    heading: "Retention and security",
    copy: "We retain enquiry and client information for as long as it is reasonably needed for communication, service delivery, records, or legal obligations. We use reasonable safeguards to protect information, but no internet transmission or storage method can be guaranteed completely secure.",
  },
  {
    heading: "Your choices",
    copy: "You may ask us to update, correct, or delete your personal information, subject to any records we are required to retain. You may also opt out of non-essential communications at any time.",
  },
  {
    heading: "External links",
    copy: "Our website may link to platforms such as Instagram, YouTube, WhatsApp, maps, or other third-party services. Their privacy practices are governed by their own policies, not this one.",
  },
];

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicyPage,
});

function PrivacyPolicyPage() {
  return (
    <main className="bg-[#FAF8F5] px-5 pb-20 pt-36 text-[#171717] sm:px-10 sm:pt-44">
      <article className="mx-auto max-w-4xl">
        <Link to="/" className="text-xs font-poppins font-semibold uppercase tracking-[0.16em] text-[#C47A65] hover:underline">
          CMC FILMS
        </Link>
        <h1 className="mt-5 font-montserrat text-4xl font-extrabold tracking-tight sm:text-6xl">Privacy Policy</h1>
        <p className="mt-5 font-poppins text-sm leading-relaxed text-[#55504A] sm:text-base">
          CMC FILMS respects the trust you place in us when you share the details of your celebration.
          This policy explains how we handle that information.
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
          <h2 className="font-league text-xl font-bold sm:text-2xl">Contact us</h2>
          <p className="mt-3 font-poppins text-sm leading-relaxed text-[#55504A] sm:text-base">
            For privacy questions or requests, email <a className="text-[#171717] underline" href="mailto:cmcfilms771@gmail.com">cmcfilms771@gmail.com</a> or call +91 74259 40636.
          </p>
        </section>
      </article>
    </main>
  );
}
