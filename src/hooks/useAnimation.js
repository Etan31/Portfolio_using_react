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
    gsap.set([skycast2Ref.current, skycast3Ref.current], { opacity: 0 });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.windowPreview',
        start: 'top center',
        end: 'bottom 80%',
        scrub: true,
        markers: false,
      },
    }).to(skycast1Ref.current, { y: -100, duration: 3, ease: "expoScale(0.5, 7, none)" });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.mobilePreview',
        start: 'top bottom',
        end: 'top 75%',
        scrub: true,
        markers: false,
      },
    })
      .to(skycast2Ref.current, { y: -140, opacity: 1, duration: 2, ease: "power1.inOut" })
      .to(skycast3Ref.current, { y: -180, opacity: 1, duration: 1, ease: "power1.inOut" });

  }, []);

  return { skycast1Ref, skycast2Ref, skycast3Ref };
};
