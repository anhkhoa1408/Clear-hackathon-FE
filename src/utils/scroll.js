import { useEffect } from "react";

function useAnimateScroll(id, offset = 0, reverse = false) {
  useEffect(() => {
    let element = document.getElementById(id);
    let lastScrollTop = 0;
    let scrollListener = window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;
      if (currentScroll > lastScrollTop) {
        if (element) {
          if (!reverse) {
            element.style.transform = `translateY(calc(${
              currentScroll / 100
            }% - ${offset}px))`;
          } else {
            element.style.transform = `translateY(calc(-${
              currentScroll / 100
            }% + ${offset}px))`;
          }
        }
      } else {
        if (element) {
          if (!reverse) {
            element.style.transform = `translateY(calc(-${
              currentScroll / 100
            }% + ${offset}px))`;
          } else {
            element.style.transform = `translateY(calc(${
              currentScroll / 100
            }% - ${offset}px))`;
          }
        }
      }
      lastScrollTop = currentScroll;
    });

    return () => window.removeEventListener(scrollListener);
  }, []);
}

export default useAnimateScroll;
