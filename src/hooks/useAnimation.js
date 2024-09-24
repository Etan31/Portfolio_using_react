// useAnimations.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const createTimeline = (triggerClass, start, end, animations) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: triggerClass,
      start,
      end,
      scrub: true,
      markers: false,
    },
  })
  .to(...animations);
};

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
  gsap.set([skycast2Ref.current, skycast3Ref.current, stt2Ref.current, stt3Ref.current, SchedBin1Ref.current, SchedBin2Ref.current, SchedBin3Ref.current, SchedBin4Ref.current, trackRecordRef.current], { opacity: 0 });

  // Example for trackRecord
  createTimeline('.windowPreview', 'top 80%', 'bottom 80%', [trackRecordRef.current, { y: -100, opacity: 1, duration: 1, ease: "expoScale(0.5, 7, none)" }]);
  createTimeline('.mobilePreview', 'top 90%', 'top 75%', [skycast2Ref.current, { y: -60, opacity: 1, duration: 2, ease: "power1.inOut" }]);
  createTimeline('.mobilePreview', 'top 90%', 'top 75%', [skycast3Ref.current, { y: -120, opacity: 1, duration: 1, ease: "power1.inOut" }]);
  createTimeline('.sttMobilePreview', 'top 90%', 'top 65%', [stt2Ref.current, { y: -140, opacity: 1, duration: 1, ease: "power1.inOut" }]);
  createTimeline('.sttMobilePreview', 'top 90%', 'top 65%', [stt3Ref.current, { y: -70, opacity: 1, duration: 1, ease: "power1.inOut" }]);
  
  createTimeline('.schedBinMobilePreview', 'top 95%', 'bottom bottom', [SchedBin1Ref.current, { y: -200, opacity: 1, duration: 2, ease: "power1.inOut" }]);
  createTimeline('.schedBinMobilePreview', 'top 95%', 'bottom bottom', [SchedBin2Ref.current, { y: -90, opacity: 1, duration: 1, ease: "power1.inOut" }]);
  createTimeline('.schedBinMobilePreview', 'top 95%', 'bottom bottom', [SchedBin3Ref.current, { y: -160, opacity: 1, duration: 1, ease: "power1.inOut" }]);
  createTimeline('.schedBinMobilePreview', 'top 95%', 'bottom bottom', [SchedBin4Ref.current, { y: -80, opacity: 1, duration: 1, ease: "power1.inOut" }]);


  return () => {
    // Kill all ScrollTrigger instances when the component unmounts
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  };
}, []);
  
  return { 
      skycast1Ref, skycast2Ref, skycast3Ref, 
      stt1Ref, stt2Ref, stt3Ref,
      SchedBin1Ref, SchedBin2Ref, SchedBin3Ref, SchedBin4Ref,
      trackRecordRef
    };
};
