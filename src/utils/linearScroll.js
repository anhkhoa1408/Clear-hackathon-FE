import { useEffect } from "react";

function limitScrollRange(childScroll, parentHeight) {
  return Math.abs(childScroll) < parentHeight;
}

function useLinearScroll(id, parentId, offset = 0, reverse = false) {
  useEffect(() => {
    let element = document.getElementById(id);
    let parentElement = document.getElementById(parentId);
    let lastScrollTop = 0;
    let scrollListener = window.addEventListener("scroll", () => {
      let currentScroll = window.scrollY;
      let parentTopOffset = parentElement.getBoundingClientRect().top;
      let topOffset = "";
      if (Math.abs(parentTopOffset) < window.innerHeight + 50) {
        if (currentScroll > lastScrollTop) {
          if (element) {
            if (!reverse) {
              topOffset =
                element.style.top !== ""
                  ? element.style.top.slice(0, element.style.top.length - 2)
                  : parentElement.offsetHeight;
              if (
                limitScrollRange(
                  Number.parseInt(topOffset) + offset,
                  parentElement.offsetHeight,
                )
              )
                element.style.top = `${Number.parseInt(topOffset) + offset}px`;
            } else {
              topOffset =
                element.style.top !== ""
                  ? element.style.top.slice(0, element.style.top.length - 2)
                  : parentElement.offsetHeight;
              if (
                limitScrollRange(
                  Number.parseInt(topOffset) - offset,
                  parentElement.offsetHeight,
                )
              )
                element.style.top = `${Number.parseInt(topOffset) - offset}px`;
            }
          }
        } else {
          if (element) {
            if (!reverse) {
              topOffset =
                element.style.top !== ""
                  ? element.style.top.slice(0, element.style.top.length - 2)
                  : -parentElement.offsetHeight;
              if (
                limitScrollRange(
                  Number.parseInt(topOffset) - offset,
                  parentElement.offsetHeight,
                )
              )
                element.style.top = `${Number.parseInt(topOffset) - offset}px`;
            } else {
              topOffset =
                element.style.top !== ""
                  ? element.style.top.slice(0, element.style.top.length - 2)
                  : -parentElement.offsetHeight;
              if (
                limitScrollRange(
                  Number.parseInt(topOffset) + offset,
                  parentElement.offsetHeight,
                )
              )
                element.style.top = `${Number.parseInt(topOffset) + offset}px`;
            }
          }
        }
      }
      lastScrollTop = currentScroll;
    });

    return () => window.removeEventListener(scrollListener);
  }, []);
}

export default useLinearScroll;
