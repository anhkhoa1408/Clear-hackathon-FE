import { useEffect } from "react";

function useAnimateScroll(id, offset = 0, reverse = false, percentage = false) {
  useEffect(() => {
    let element = document.getElementById(id);
    let lastScrollTop = 0;
    let scrollListener = window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;
      let scrollDiff = Math.abs(currentScroll - lastScrollTop);
      scrollDiff = scrollDiff > 10 ? scrollDiff / 10 : scrollDiff;
      if (currentScroll > lastScrollTop) {
        if (element) {
          if (!reverse) {
            element.style.transform = `translateY(calc(${scrollDiff}% + ${offset}${
              percentage ? "%" : "px"
            }))`;
          } else {
            element.style.transform = `translateY(calc(-${scrollDiff}% - ${offset}${
              percentage ? "%" : "px"
            }))`;
          }
        }
      } else {
        if (element) {
          if (!reverse) {
            element.style.transform = `translateY(calc(-${scrollDiff}% - ${offset}${
              percentage ? "%" : "px"
            }))`;
          } else {
            element.style.transform = `translateY(calc(${scrollDiff}% + ${offset}${
              percentage ? "%" : "px"
            }))`;
          }
        }
      }
      lastScrollTop = currentScroll;
    });

    return () => window.removeEventListener(scrollListener);
  }, []);
}

export default useAnimateScroll;
