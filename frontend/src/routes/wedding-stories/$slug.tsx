import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import {
  blogPosts,
  CleanBlogReaderModal,
  dedupePostsById,
  getStorySlug,
  toPublishedStoryPost,
  type BlogPost,
} from "./index";

export const Route = createFileRoute("/wedding-stories/$slug")({
  component: WeddingStoryArticleRoute,
});

function WeddingStoryArticleRoute() {
  const { slug } = Route.useParams();
  const navigate = useNavigate();
  const [posts, setPosts] = useState<BlogPost[]>(blogPosts);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${import.meta.env.VITE_API_URL || "http://localhost:5001"}/api/stories`, {
      signal: controller.signal,
    })
      .then((response) => response.json())
      .then((payload) => {
        if (!Array.isArray(payload?.data?.stories)) return;
        const publishedStories = payload.data.stories
          .filter((story: any) => story.status !== "Draft" && story.title)
          .map(toPublishedStoryPost);
        setPosts(dedupePostsById([...publishedStories, ...blogPosts]));
      })
      .catch(() => undefined)
      .finally(() => setLoaded(true));
    return () => controller.abort();
  }, []);

  const post = useMemo(
    () => posts.find((item) => getStorySlug(item) === slug),
    [posts, slug],
  );

  if (!post && !loaded) return null;

  if (!post) {
    return (
      <main className="min-h-[60vh] bg-[#FAF8F5] px-6 py-32 text-center text-[#261E1E]">
        <h1 className="font-display text-4xl">Story not found</h1>
        <p className="mt-4 text-[#261E1E]/70">This wedding story may have been moved or unpublished.</p>
        <Link to="/wedding-stories" className="mt-8 inline-flex rounded-full bg-[#261E1E] px-6 py-3 text-sm text-white">
          Back to Wedding Stories
        </Link>
      </main>
    );
  }

  return <CleanBlogReaderModal post={post} onClose={() => navigate({ to: "/wedding-stories" })} />;
}
