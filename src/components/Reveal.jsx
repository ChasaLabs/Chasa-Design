import { useEffect, useRef, useState } from "react";

export default function Reveal({ children, className = "", delay = 0, as = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return undefined;

    if (visible) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(element);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [visible]);

  const props = {
    ref,
    className: `reveal ${visible ? "is-visible" : ""} ${className}`.trim(),
    style: { "--reveal-delay": `${delay}ms` },
  };

  if (as === "h1") return <h1 {...props}>{children}</h1>;
  if (as === "li") return <li {...props}>{children}</li>;
  return <div {...props}>{children}</div>;
}
