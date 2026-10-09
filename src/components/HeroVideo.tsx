'use client';

import { useEffect, useState } from 'react';

export default function HeroVideo() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) return;

    const start = () => {
      if ('requestIdleCallback' in window) {
        const id = window.requestIdleCallback(() => setReady(true), { timeout: 1400 });
        return () => window.cancelIdleCallback(id);
      }
      const timer = globalThis.setTimeout(() => setReady(true), 700);
      return () => globalThis.clearTimeout(timer);
    };

    if (document.readyState === 'complete') return start();

    let cleanup: (() => void) | undefined;
    const onLoad = () => { cleanup = start(); };
    window.addEventListener('load', onLoad, { once: true });
    return () => {
      window.removeEventListener('load', onLoad);
      cleanup?.();
    };
  }, []);

  if (!ready) return null;

  return (
    <div className="youtube-hero pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <iframe
        className="youtube-cover"
        src="https://www.youtube.com/embed/PnA4c2xO2mg?autoplay=1&mute=1&controls=0&loop=1&playlist=PnA4c2xO2mg&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3&disablekb=1"
        title="Isuzu hero video"
        allow="autoplay; encrypted-media; picture-in-picture"
        tabIndex={-1}
      />
    </div>
  );
}
