import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Reveal, SectionLabel } from "@/components/Reveal";
import { Lightbox, type LightboxItem } from "@/components/ui/Lightbox";

const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:5001").replace(/\/$/, "");

type GalleryWallItem = LightboxItem & {
  id: string;
  categoryTag: string;
  aspectRatio: string;
};

interface AdminGalleryImage {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: string;
  aspectRatio: string;
  createdAt: string;
}

const categoryTabs = ["All Stories", "Weddings", "Bridal", "Pre-Wedding", "Couples", "Ceremonies"];

export function PortfolioEditorial() {
  const [activeTab, setActiveTab] = useState("All Stories");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // The public page loads images published through the admin CMS.
  // `null` means content has not loaded yet. An empty array is an intentional
  // CMS choice and must stay empty after a code deployment.
  const [adminGallery, setAdminGallery] = useState<AdminGalleryImage[] | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/api/home-gallery`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        if (payload?.success && Array.isArray(payload?.data?.images)) {
          setAdminGallery(payload.data.images);
        }
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, []);

  // Convert admin gallery to GalleryWallItem format
  const activeItems: GalleryWallItem[] = (adminGallery || []).slice(0, 15).map((img) => ({
        id: img.id,
        src: img.src,
        alt: img.alt || img.title,
        title: img.title,
        category: img.category,
        categoryTag: img.category,
        location: '',
        year: img.createdAt?.split('-')[0] || '2026',
        aspectRatio: img.aspectRatio || 'aspect-[4/3]',
      }));

  const filtered = activeTab === "All Stories"
    ? activeItems
    : activeItems.filter((item) => item.categoryTag === activeTab);

  // Do not render old bundled/sample photos when the gallery is intentionally
  // empty or the CMS cannot be reached.
  if (activeItems.length === 0) return null;

  return (
    <section className="bg-[#F0E8DF] px-4 pt-4 pb-10 md:px-8 md:pt-10 md:pb-24 border-b border-espresso/10">
      <div className="mx-auto max-w-[1750px]">
        {/* Clean Header Title */}
        <Reveal className="mb-4 md:mb-6 text-left">
          <h2 className="font-display text-[clamp(2.2rem,5vw,4.25rem)] leading-tight font-light text-[#261E1E]">
            The Visual <em className="font-editorial italic text-[#93191E] font-normal">Editorial Masonry</em>
          </h2>
        </Reveal>

        {/* ── MASONRY COLUMNS GRID (Pure Clean Images, No Hover Effects, Tight Gap) ── */}
        <div className="columns-2 sm:columns-2 md:columns-3 lg:columns-4 gap-1 sm:gap-1.5 md:gap-2 space-y-1 sm:space-y-1.5 md:space-y-2">
          {filtered.map((item, idx) => (
            <div
              key={item.id}
              className="break-inside-avoid relative overflow-hidden bg-beige cursor-pointer mb-1.5 md:mb-2 shadow-none"
              onClick={() => setLightboxIndex(idx)}
            >
              <div className={`relative w-full ${item.aspectRatio} overflow-hidden`}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Footer Link */}
        <Reveal className="mt-12 flex justify-center">
          <Link
            to="/couples"
            className="label-xs border border-espresso bg-espresso px-9 py-4 text-ivory transition-all duration-300 hover:bg-gold hover:border-gold hover:text-cinema shadow-md flex items-center gap-3"
          >
            <span>Explore Complete Archive Portfolio</span>
            <span>→</span>
          </Link>
        </Reveal>
      </div>

      {/* Full-Screen Dark Lightbox Modal */}
      <Lightbox
        items={filtered}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </section>
  );
}
