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
