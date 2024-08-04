// useAnimations.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
  const skycast1Ref = useRef(null);
  const skycast2Ref = useRef(null);
  const skycast3Ref = useRef(null);

  useEffect(() => {
    gsap.set([skycast2Ref.current, skycast3Ref.current], { opacity: 0.7 });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.windowPreview',
        start: 'top 45%',
        end: 'bottom 80%',
        scrub: true,
        markers: true,
      },
    }).to(skycast1Ref.current, { y: -100, ease: "expoScale(0.5, 7, none)" });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.mobilePreview',
        start: 'top bottom',
        end: 'bottom 90%',
        scrub: true,
        markers: true,
      },
    })
      .to(skycast2Ref.current, { y: -170, opacity: 1, duration: 1, ease: "power1.inOut" })
      .to(skycast3Ref.current, { y: -200, opacity: 1, duration: 1.5, ease: "power1.inOut" });

  }, []);

  return { skycast1Ref, skycast2Ref, skycast3Ref };
};
