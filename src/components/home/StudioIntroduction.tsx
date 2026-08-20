import { Link } from "@tanstack/react-router";
import { Reveal } from "@/components/Reveal";

export function StudioIntroduction() {
  return (
    <section className="bg-[#FAF8F5] text-[#2D2A26] py-16 sm:py-24 px-6 sm:px-12 border-b border-[#171717]/10 relative select-none">
      <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-7">
        
        <Reveal>
          <p className="font-editorial text-lg sm:text-xl md:text-[22px] text-[#2D2A26] leading-relaxed tracking-wide font-normal">
            At CMC FILMS, we don’t just photograph weddings — we preserve love in its most raw, unscripted, and royal moments. Since 2008, our team of fine-art photographers and cinematographers has been documenting stories of romance across Udaipur, Jaipur, Goa, and destination venues worldwide.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="font-editorial text-base sm:text-lg md:text-[19px] text-[#4A453F] leading-relaxed font-normal">
            Founded in Udaipur with a vision to turn wedding celebrations into timeless heirlooms, our journey started with a deep passion for cinema and visual art. From colorful Rajasthani rituals and grand palace pheras to serene oceanfront vows, we have had the privilege of capturing over 500+ couples across the globe with transparent dedication and artistic mastery.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="font-editorial text-base sm:text-lg md:text-[19px] text-[#4A453F] leading-relaxed font-normal">
            For us, it is more than just photography; it’s about capturing the authentic emotions, the laughter, the chaos, and the quiet magic that make your love story one of a kind.
          </p>
        </Reveal>

        <Reveal delay={0.3} className="pt-3">
          <Link
            to="/about"
            className="inline-block bg-[#33302C] hover:bg-[#C47A65] text-white font-poppins text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer"
          >
            Get in touch
          </Link>
        </Reveal>

      </div>
    </section>
  );
}
