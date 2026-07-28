import { useEffect, useRef, useState } from "react";

export default function RevealOnScroll({
  children,
  className = "",
  delay = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -10% 0px",
  onReveal,
}) {
  const elementRef = useRef(null);
  const onRevealRef = useRef(onReveal);
  const [canAnimate] = useState(
    () =>
      typeof window !== "undefined" &&
      "IntersectionObserver" in window &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [isVisible, setIsVisible] = useState(false);
  const [revealFrom, setRevealFrom] = useState("down");

  useEffect(() => {
    onRevealRef.current = onReveal;
  }, [onReveal]);

  useEffect(() => {
    if (!canAnimate) {
      const frameId = window.requestAnimationFrame(() => onRevealRef.current?.());
      return () => window.cancelAnimationFrame(frameId);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setRevealFrom(entry.boundingClientRect.top < 0 ? "up" : "down");
        setIsVisible(entry.isIntersecting);

        if (entry.isIntersecting) onRevealRef.current?.();
      },
      { threshold, rootMargin },
    );

    if (elementRef.current) observer.observe(elementRef.current);

    return () => observer.disconnect();
  }, [canAnimate, rootMargin, threshold]);

  const isPending = canAnimate && !isVisible;

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal transition-[opacity,transform] duration-700 ease-out ${
        isPending
          ? `${revealFrom === "up" ? "-translate-y-8" : "translate-y-8"} opacity-0`
          : "translate-y-0 opacity-100"
      } ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
