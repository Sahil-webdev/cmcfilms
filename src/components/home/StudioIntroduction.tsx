import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export function StudioIntroduction() {
  return (
    <section className="bg-[#FAF8F5] text-[#2D2A26] py-14 sm:py-20 px-6 sm:px-12 border-b border-[#171717]/10 relative select-none">
      <div className="max-w-4xl mx-auto text-center space-y-5 sm:space-y-6">
        
        <Reveal>
          <p className="font-sans text-sm sm:text-base md:text-[17px] text-[#2D2A26] leading-relaxed font-normal">
            At CMC FILMS, we don’t just photograph weddings — we preserve love in its most raw, unscripted, and royal moments. Since 2008, our team of fine-art photographers and cinematographers has been documenting stories of romance across Udaipur, Jaipur, Goa, and destination venues worldwide.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-sans text-sm sm:text-base md:text-[16px] text-[#55504A] leading-relaxed font-light">
            Founded in Udaipur with a vision to turn wedding celebrations into timeless heirlooms, our journey started with a deep passion for cinema and visual art. From colorful Rajasthani rituals and grand palace pheras to serene oceanfront vows, we have had the privilege of capturing over 500+ couples across the globe with transparent dedication and artistic mastery.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-sans text-sm sm:text-base md:text-[16px] text-[#55504A] leading-relaxed font-light">
            For us, it is more than just photography; it’s about capturing the authentic emotions, the laughter, the chaos, and the quiet magic that make your love story one of a kind.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="pt-2">
          <Link
            to="/about"
            className="inline-block bg-[#33302C] hover:bg-[#C47A65] text-white font-poppins text-xs sm:text-sm font-semibold px-8 py-3 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Get in touch
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
