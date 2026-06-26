import { useEffect, useRef, useState } from "react";

export default function ProjectMiniCarousel({
  images = [],
  slides = [],
  title,
  objectPosition,
  onSlideChange,
}) {
  const safeSlides = slides.length
    ? slides.filter((slide) => slide?.image)
    : images.filter(Boolean).map((image) => ({ image, title, objectPosition }));
  const [activeIndex, setActiveIndex] = useState(0);
  const [transitioningFromIndex, setTransitioningFromIndex] = useState(null);
  const [transitionDirection, setTransitionDirection] = useState("next");
  const [isTransitioning, setIsTransitioning] = useState(false);
  const intervalRef = useRef(null);
  const transitionTimerRef = useRef(null);
  const activeSlide = safeSlides[activeIndex] || safeSlides[0];
  const hasMultipleImages = safeSlides.length > 1;

  const selectSlide = (nextIndex) => {
    if (nextIndex === activeIndex || !safeSlides.length) return;

    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    if (transitionTimerRef.current) {
      window.clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = null;
    }

    setTransitioningFromIndex(activeIndex);
    setTransitionDirection(nextIndex > activeIndex ? "next" : "prev");
    setIsTransitioning(true);
    setActiveIndex(nextIndex);
    onSlideChange?.(nextIndex);

    transitionTimerRef.current = window.setTimeout(() => {
      setIsTransitioning(false);
      setTransitioningFromIndex(null);
      transitionTimerRef.current = null;
    }, 700);
  };

  useEffect(() => {
    if (!safeSlides.length) return undefined;

    const advanceSlide = () => {
      const nextIndex = (activeIndex + 1) % safeSlides.length;
      setTransitioningFromIndex(activeIndex);
      setTransitionDirection("next");
      setIsTransitioning(true);
      setActiveIndex(nextIndex);
      onSlideChange?.(nextIndex);

      transitionTimerRef.current = window.setTimeout(() => {
        setIsTransitioning(false);
        setTransitioningFromIndex(null);
        transitionTimerRef.current = null;
      }, 700);
    };

    intervalRef.current = window.setInterval(advanceSlide, 6000);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      if (transitionTimerRef.current) {
        window.clearTimeout(transitionTimerRef.current);
        transitionTimerRef.current = null;
      }
    };
  }, [activeIndex, onSlideChange, safeSlides.length]);

  if (!activeSlide) {
    return <div className="aspect-[36/25] w-full rounded-2xl bg-neutral-200" />;
  }

  return (
    <div className="mx-auto w-full max-w-[26.95rem] md:mx-0 md:max-w-none">
      <div className="relative aspect-[36/25] w-full overflow-hidden rounded-2xl bg-neutral-200">
        {safeSlides.map((slide, index) => {
          const isActive = index === activeIndex;
          const isOutgoing = isTransitioning && index === transitioningFromIndex;
          const isIncoming = isTransitioning && index === activeIndex;

          let positionClass = "opacity-0";
          if (!isTransitioning) {
            positionClass = isActive ? "translate-x-0 opacity-100" : "opacity-0";
          } else if (isOutgoing) {
            positionClass = transitionDirection === "next" ? "-translate-x-full opacity-0" : "translate-x-full opacity-0";
          } else if (isIncoming) {
            positionClass = "translate-x-0 opacity-100";
          }

          return (
            <img
              key={`${slide.image}-${index}`}
              src={slide.image}
              alt={`${slide.title || title} - image ${index + 1}`}
              className={`absolute inset-0 h-full w-full transition-all duration-700 ease-out ${
                slide.objectFit === "contain" ? "object-contain" : "object-cover"
              } ${positionClass}`}
              style={{ objectPosition: slide.objectPosition || objectPosition || "center" }}
            />
          );
        })}

      </div>

      {hasMultipleImages && (
        <div className="mt-3 flex justify-center gap-2" aria-label={`${title} image navigation`}>
          {safeSlides.map((slide, index) => (
            <button
              key={`${slide.image}-${index}`}
              type="button"
              onClick={() => selectSlide(index)}
              aria-label={`Show ${slide.title || title} image ${index + 1}`}
              className={`h-2.5 w-2.5 rounded-full border border-neutral-900/20 p-0 transition-all ${
                index === activeIndex
                  ? "scale-110 border-neutral-900 bg-neutral-900 shadow-[0_0_0_3px_rgba(0,0,0,0.08)]"
                  : "bg-neutral-300 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}