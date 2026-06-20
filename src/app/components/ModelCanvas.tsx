'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useState, useEffect, useRef } from 'react';
import SpinningModel from './SpinningModel';
import { Bounds } from '@react-three/drei';

const ModelCanvas = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [fov, setFov] = useState(70);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setFov(window.innerWidth < 640 ? 80 : 70);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    const updateActive = (visible: boolean) => {
      setIsActive(visible && document.visibilityState === 'visible');
    };

    const observer = new IntersectionObserver(
      ([entry]) => updateActive(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const handleVisibility = () => {
      const rect = node.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      updateActive(inView);
    };

    observer.observe(node);
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      observer.disconnect();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-[40vh] sm:h-[50rem]">
      <Canvas
        frameloop={isActive ? 'always' : 'never'}
        camera={{ position: [0, 0, 5], fov, near: 0.1, far: 100 }}
      >
        <ambientLight intensity={1} />
        <Suspense fallback={null}>
          <Bounds fit clip observe margin={1.2}>
            <SpinningModel active={isActive} />
          </Bounds>
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ModelCanvas;
