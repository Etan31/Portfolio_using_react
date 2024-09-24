// useAnimations.js
import { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const useAnimations = () => {
  const controls = {
    skycast1: useAnimation(),
    skycast2: useAnimation(),
    skycast3: useAnimation(),
    stt1: useAnimation(),
    stt2: useAnimation(),
    stt3: useAnimation(),
    schedBin1: useAnimation(),
    schedBin2: useAnimation(),
    schedBin3: useAnimation(),
    schedBin4: useAnimation(),
    trackRecord: useAnimation(),
  };

  const [skycast1Ref, inViewSkycast1] = useInView({ triggerOnce: true, threshold: 0.8 });
  const [skycast2Ref, inViewSkycast2] = useInView({ triggerOnce: true, threshold: 0.75 });
  const [skycast3Ref, inViewSkycast3] = useInView({ triggerOnce: true, threshold: 0.75 });
  const [stt1Ref, inViewStt1] = useInView({ triggerOnce: true, threshold: 0.65 });
  const [stt2Ref, inViewStt2] = useInView({ triggerOnce: true, threshold: 0.65 });
  const [stt3Ref, inViewStt3] = useInView({ triggerOnce: true, threshold: 0.65 });
  const [schedBin1Ref, inViewSchedBin1] = useInView({ triggerOnce: true, threshold: 0.95 });
  const [schedBin2Ref, inViewSchedBin2] = useInView({ triggerOnce: true, threshold: 0.95 });
  const [schedBin3Ref, inViewSchedBin3] = useInView({ triggerOnce: true, threshold: 0.95 });
  const [schedBin4Ref, inViewSchedBin4] = useInView({ triggerOnce: true, threshold: 0.95 });
  const [trackRecordRef, inViewTrackRecord] = useInView({ triggerOnce: true, threshold: 0.8 });

  useEffect(() => {
    if (inViewSkycast1) {
      controls.skycast1.start({ y: -60, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
    if (inViewSkycast2) {
      controls.skycast2.start({ y: -100, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
    if (inViewSkycast3) {
      controls.skycast3.start({ y: -140, opacity: 1, transition: { duration: 0.2, ease: "easeInOut" } });
    }
    if (inViewStt2) {
      controls.stt1.start({ y: -70, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
    if (inViewStt1) {
      controls.stt2.start({ y: -140, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
    if (inViewStt2) {
      controls.stt3.start({ y: -70, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
    if (inViewSchedBin1) {
      controls.schedBin1.start({ y: -200, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
    if (inViewSchedBin2) {
      controls.schedBin2.start({ y: -90, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
    if (inViewSchedBin3) {
      controls.schedBin3.start({ y: -160, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
    if (inViewSchedBin4) {
      controls.schedBin4.start({ y: -100, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
    if (inViewTrackRecord) {
      controls.trackRecord.start({ y: -100, opacity: 1, transition: { duration: 0.5, ease: "easeInOut" } });
    }
  }, [
    inViewSkycast1,
    inViewSkycast2,
    inViewSkycast3,
    inViewStt1,
    inViewStt2,
    inViewSchedBin1,
    inViewSchedBin2,
    inViewSchedBin3,
    inViewSchedBin4,
    inViewTrackRecord,
    controls,
  ]);

  return {
    skycast1Ref,
    skycast2Ref,
    skycast3Ref,
    stt1Ref,
    stt2Ref,
    stt3Ref,
    schedBin1Ref,
    schedBin2Ref,
    schedBin3Ref,
    schedBin4Ref,
    trackRecordRef,
    controls,
  };
};
