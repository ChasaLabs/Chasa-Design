import { useState } from "react";

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
  const activeSlide = safeSlides[activeIndex] || safeSlides[0];
  const hasMultipleImages = safeSlides.length > 1;

  const selectSlide = (nextIndex) => {
    setActiveIndex(nextIndex);
    onSlideChange?.(nextIndex);
  };

  const showPrevious = () => {
    selectSlide((activeIndex - 1 + safeSlides.length) % safeSlides.length);
  };

  const showNext = () => {
    selectSlide((activeIndex + 1) % safeSlides.length);
  };

  if (!activeSlide) {
    return <div className="aspect-[36/25] w-full rounded-2xl bg-neutral-200" />;
  }

  return (
    <div className="mx-auto w-full max-w-[26.95rem] md:mx-0 md:max-w-none">
      <div className="relative aspect-[36/25] w-full overflow-hidden rounded-2xl bg-neutral-200">
        <img
          src={activeSlide.image}
          alt={`${activeSlide.title || title} - image ${activeIndex + 1}`}
          className={`h-full w-full ${
            activeSlide.objectFit === "contain" ? "object-contain" : "object-cover"
          }`}
          style={{ objectPosition: activeSlide.objectPosition || objectPosition || "center" }}
        />

        {hasMultipleImages && (
          <>
            <button
              type="button"
              onClick={showPrevious}
              aria-label={`Previous ${title} image`}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border-0 bg-white/80 px-3 py-2 text-sm text-neutral-900 shadow transition hover:bg-white"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={showNext}
              aria-label={`Next ${title} image`}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border-0 bg-white/80 px-3 py-2 text-sm text-neutral-900 shadow transition hover:bg-white"
            >
              &rarr;
            </button>
          </>
        )}
      </div>

      {hasMultipleImages && (
        <div className="mt-3 flex justify-center gap-2" aria-label={`${title} image navigation`}>
          {safeSlides.map((slide, index) => (
            <button
              key={`${slide.image}-${index}`}
              type="button"
              onClick={() => selectSlide(index)}
              aria-label={`Show ${slide.title || title} image ${index + 1}`}
              aria-current={index === activeIndex ? "true" : undefined}
              className={`h-2 w-2 rounded-full border-0 p-0 transition-colors ${
                index === activeIndex ? "bg-neutral-900" : "bg-neutral-300 hover:bg-neutral-500"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}