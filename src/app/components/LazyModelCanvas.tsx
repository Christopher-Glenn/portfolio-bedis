'use client';

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

const ModelCanvas = dynamic(() => import('@/app/components/ModelCanvas'), {
  ssr: false,
});

export default function LazyModelCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="sm:w-[45rem] sm:h-auto h-[22rem] w-full pt-5 sm:pt-0">
      {shouldLoad ? <ModelCanvas /> : null}
    </div>
  );
}
