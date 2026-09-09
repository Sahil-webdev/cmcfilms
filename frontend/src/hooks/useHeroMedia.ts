import { useEffect, useState } from 'react';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

export function useHeroMedia(page: string, fallback: string) {
  const [mediaUrl, setMediaUrl] = useState(fallback);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/api/site-settings/hero-media`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        const savedUrl = payload?.data?.media?.[page]?.url;
        if (typeof savedUrl === 'string' && savedUrl) setMediaUrl(savedUrl);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [page]);

  return mediaUrl;
}

export function useHeroImages(page: string, fallbackImages: string[]) {
  const [mediaUrls, setMediaUrls] = useState(fallbackImages);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`${API_URL}/api/site-settings/hero-media`, { signal: controller.signal })
      .then((response) => response.json())
      .then((payload) => {
        const savedMedia = payload?.data?.media?.[page];
        // Home only accepts images. A legacy video setting must never replace
        // the image carousel's safe local fallback.
        if (savedMedia?.type === 'video') return;
        const savedImages = Array.isArray(savedMedia?.images)
          ? savedMedia.images.filter((url: unknown): url is string => typeof url === 'string' && url.length > 0).slice(0, 3)
          : typeof savedMedia?.url === 'string' && savedMedia.url
            ? [savedMedia.url]
            : [];
        if (savedImages.length > 0) setMediaUrls(savedImages);
      })
      .catch(() => undefined);
    return () => controller.abort();
  }, [page]);

  return mediaUrls;
}
