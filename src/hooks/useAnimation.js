// useAnimations.js
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useAnimations = () => {
  const skycast1Ref = useRef(null);
  const skycast2Ref = useRef(null);
  const skycast3Ref = useRef(null);
  const stt1Ref = useRef(null);
  const stt2Ref = useRef(null);
  const stt3Ref = useRef(null);
  const SchedBin1Ref = useRef(null);
  const SchedBin2Ref = useRef(null);
  const SchedBin3Ref = useRef(null);
  const SchedBin4Ref = useRef(null);
  const trackRecordRef = useRef(null);
  

  useEffect(() => {
    gsap.set([skycast2Ref.current, skycast3Ref.current], { opacity: 0 });
    gsap.set([stt2Ref.current, stt3Ref.current], { opacity: 0 });
    gsap.set([SchedBin1Ref.current, SchedBin2Ref.current, SchedBin3Ref.current, SchedBin4Ref.current], { opacity: 0 });
    gsap.set([trackRecordRef.current], { opacity: 0 });


    gsap.timeline({
      scrollTrigger: {
        trigger: '.windowPreview',
        start: 'top center',
        end: 'bottom 80%',
        scrub: true,
        markers: true,
      },
    })
    .to(trackRecordRef.current, { y: -100, opacity: 1, duration: 3, ease: "expoScale(0.5, 7, none)" })
    // .to(stt1Ref.current, { y: -100, duration: 3, ease: "expoScale(0.5, 7, none)" });

    gsap.timeline({
      scrollTrigger: {
        trigger: '.mobilePreview',
        start: 'top 90%',
        end: 'top 75%',
        scrub: true,
        markers: false,
      },
    })
      .to(skycast2Ref.current, { y: -60, opacity: 1, duration: 2, ease: "power1.inOut" })
      .to(skycast3Ref.current, { y: -120, opacity: 1, duration: 1, ease: "power1.inOut" });


    gsap.timeline({
      scrollTrigger: {
        trigger: '.sttMobilePreview',
        start: 'top 90%',
        end: 'top 65%',
        scrub: true,
        markers: false,
      },
    })
      .to(stt2Ref.current, { y: -140, opacity: 1, duration: 1, ease: "power1.inOut" })
      .to(stt3Ref.current, { y: -70, opacity: 1, duration: 1, ease: "power1.inOut" });
      
      
    gsap.timeline({
      scrollTrigger: {
        trigger: '.schedBinMobilePreview',
        start: 'top 95%',
        end: 'bottom bottom',
        scrub: true,
        markers: false,
      },
    })
      .to(SchedBin1Ref.current, { y: -200 , opacity: 1, duration: 2, ease: "power1.inOut" })
      .to(SchedBin2Ref.current, { y: -90, opacity: 1, duration: 1, ease: "power1.inOut" })
      .to(SchedBin3Ref.current, { y: -160, opacity: 1, duration: 1, ease: "power1.inOut" })
      .to(SchedBin4Ref.current, { y: -80, opacity: 1, duration: 1, ease: "power1.inOut" })

  }, []);

  return { 
      skycast1Ref, skycast2Ref, skycast3Ref, 
      stt1Ref, stt2Ref, stt3Ref,
      SchedBin1Ref, SchedBin2Ref, SchedBin3Ref, SchedBin4Ref,
      trackRecordRef
    };
};
