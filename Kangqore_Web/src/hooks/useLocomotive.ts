import { useEffect } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export const useLocomotive = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]') as HTMLElement,
      smooth: true,
      multiplier: 1,
      lerp: 0.1,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });

    return () => {
      scroll.destroy();
    };
  }, []);
};