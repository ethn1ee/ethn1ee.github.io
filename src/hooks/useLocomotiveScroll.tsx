"use client";

import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef } from "react";

const useLocomotiveScroll = () => {
  const scrollRef = useRef<LocomotiveScroll>(null);

  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      scrollRef.current = new LocomotiveScroll({});
    })();

    return () => {
      if (scrollRef.current) scrollRef.current.destroy();
    };
  }, []);

  return scrollRef;
};

export default useLocomotiveScroll;
