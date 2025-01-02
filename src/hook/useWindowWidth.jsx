import { useState, useEffect } from "react";

export default function useWindowWidth() {
  const isClient = typeof window !== "undefined";
  const [windowWidth, setWindowWidth] = useState(
    isClient ? window.innerWidth : 0
  );

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    if (isClient) {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);

  return {
    width: windowWidth,
    xsBreakPoint: windowWidth < 576 ? true : false,
    smBreakPoint: windowWidth < 768 ? true : false,
    mdBreakPoint: windowWidth < 992 ? true : false,
    lgBreakPoint: windowWidth < 1200 ? true : false,
    xlBreakPoint: windowWidth < 1400 ? true : false,
    xxlBreakPoint: windowWidth >= 1400 ? true : false,
    isMobileView: windowWidth < 768 && true,
    isTabletView: windowWidth < 1200 && true,
    isDesktopView: windowWidth >= 1200 && true,
  };
}
