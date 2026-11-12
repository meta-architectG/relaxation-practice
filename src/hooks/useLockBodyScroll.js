import { useEffect } from "react";

let lockCount = 0;
let snapshot = null;

export const useLockBodyScroll = (locked) => {
  useEffect(() => {
    if (!locked) return;

    if (lockCount === 0) {
      const scrollY = window.scrollY;
      const scrollbarWidth =
        window.innerWidth - document.documentElement.clientWidth;

      snapshot = {
        overflow: document.body.style.overflow,
        position: document.body.style.position,
        top: document.body.style.top,
        width: document.body.style.width,
        paddingRight: document.body.style.paddingRight,
        scrollY,
      };

      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    }

    lockCount += 1;

    return () => {
      lockCount -= 1;
      if (lockCount === 0 && snapshot) {
        document.body.style.overflow = snapshot.overflow;
        document.body.style.position = snapshot.position;
        document.body.style.top = snapshot.top;
        document.body.style.width = snapshot.width;
        document.body.style.paddingRight = snapshot.paddingRight;
        window.scrollTo(0, snapshot.scrollY);
        snapshot = null;
      }
    };
  }, [locked]);
};
