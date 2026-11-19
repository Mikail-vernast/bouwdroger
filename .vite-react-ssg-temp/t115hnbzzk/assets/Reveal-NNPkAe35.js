import { jsx } from "react/jsx-runtime";
import { useRef, useEffect } from "react";
globalThis.__VITE_REACT_SSG_TRACK_SSR_MODULE__?.("src/components/Reveal.tsx");
const Reveal = ({
  as: Tag = "div",
  from = "up",
  delay = 0,
  className,
  style,
  children,
  ...rest
}) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.dataset.rv = "armed";
    const done = () => {
      delete el.dataset.rv;
      delete el.dataset.rvFrom;
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        observer.disconnect();
        el.addEventListener("transitionend", done, { once: true });
        el.dataset.rv = "in";
      },
      { rootMargin: "0px 0px -8% 0px" }
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      el.removeEventListener("transitionend", done);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    Tag,
    {
      ref,
      className,
      "data-rv-from": from,
      style: delay ? { ...style, "--rv-delay": `${delay}s` } : style,
      ...rest,
      children
    }
  );
};
export {
  Reveal as R
};
