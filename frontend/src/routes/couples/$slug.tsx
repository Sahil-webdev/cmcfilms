import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { CleanBlogReaderModal, type BlogPost } from "../wedding-stories/index";
import {
  coupleStoriesList,
  getCoupleStorySlug,
  type CoupleStoryItem,
} from "../couples";

export const Route = createFileRoute("/couples/$slug")({
  component: CoupleStoryArticleRoute,
});

const toCoupleStoryPost = (story: CoupleStoryItem): BlogPost => ({
  id: story.id,
  slug: getCoupleStorySlug(story),
  title: story.title,
  category: "Couple Shoots",
  date: story.year,
  readTime: "5 min read",
  author: { name: story.couple, avatar: "" },
  coverImage: story.heroImage,
  excerpt: story.introText,
  content: {
    intro: story.introText,
    sections: [
      {
        heading: "A story told naturally",
        body: story.introText,
        image: story.supportingImage || story.galleryImages[0],
      },
      {
        heading: "The details that made it theirs",
        body: `Captured at ${story.location}, this ${story.shootType.toLowerCase()} is a quiet record of connection, movement, and the moments in between.`,
        image: story.galleryImages[1],
      },
    ],
    conclusion: "Every couple story is captured with the same care: honest moments, beautiful light, and memories that still feel like you.",
  },
});

function CoupleStoryArticleRoute() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const [stories, setStories] = useState<CoupleStoryItem[]>(coupleStoriesList);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5001"}/api/couple-content`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((payload) => {
        const blogs = payload?.data?.content?.blogs;
        if (!Array.isArray(blogs) || blogs.length === 0) return;

        const managedStories = blogs.map((blog: any, index: number): CoupleStoryItem => ({
          id: String(blog.id || `blog-${index}`),
          couple: "CMC FILMS",
          title: String(blog.title || "Couple Shoot Story"),
          location: "",
          city: "Udaipur",
          shootType: "Pre-Wedding",
          year: new Date().getFullYear().toString(),
          heroImage: String(blog.image || ""),
          supportingImage: String(blog.image || ""),
          galleryImages: blog.image ? [String(blog.image)] : [],
          introText: String(blog.excerpt || ""),
          credits: {
            location: "",
            photography: "CMC FILMS",
            film: "CMC FILMS",
            styling: "",
            year: new Date().getFullYear().toString(),
          },
        }));
        setStories(managedStories);
      })
      .catch(() => undefined)
      .finally(() => setLoaded(true));

    return () => controller.abort();
  }, []);

  const story = useMemo(
    () => stories.find((item) => getCoupleStorySlug(item) === slug),
    [slug, stories],
  );

  if (!story && !loaded) return null;

  if (!story) {
    return (
      <main className="min-h-[60vh] bg-[#FAF8F5] px-6 py-32 text-center text-[#261E1E]">
        <h1 className="font-display text-4xl">Story not found</h1>
        <p className="mt-4 text-[#261E1E]/70">This couple story may have been moved or unpublished.</p>
        <Link to="/couples" className="mt-8 inline-flex rounded-full bg-[#261E1E] px-6 py-3 text-sm text-white">
          Back to Couple Shoots
        </Link>
      </main>
    );
  }

  return (
    <CleanBlogReaderModal
      post={toCoupleStoryPost(story)}
      onClose={() => navigate({ to: "/couples" })}
    />
  );
}
