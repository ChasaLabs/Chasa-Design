import { useEffect, useRef, useState } from "react";
import pc1 from "../assets/PC_1.jpeg";
import pc2 from "../assets/PC_2.jpeg";
import tl1 from "../assets/TL_1.jpeg";
import krh1 from "../assets/KRH_1.jpeg";

const defaultItems = [
  {
    title: "Movement",
    summary:
      "Circulation is composed to feel intuitive and calm, using light and proportion to guide orientation with minimal noise.",
    caption: "Sequenced space with clear transitions and calm flow.",
    image: pc1,
  },
  {
    title: "Gathering",
    summary:
      "Shared environments are shaped through scale, rhythm, and restraint so people and atmosphere define the experience.",
    caption: "Collective spaces balanced for comfort and connection.",
    image: pc2,
  },
  {
    title: "Service",
    summary:
      "Performance and operational needs are integrated early so technical clarity and architectural intent evolve together.",
    caption: "Technical precision embedded within the architectural order.",
    image: tl1,
  },
  {
    title: "Dwelling",
    summary:
      "Daily routines are supported through measured enclosure, tactile materiality, and openings tuned to context.",
    caption: "Quiet, durable environments for everyday living.",
    image: krh1,
  },
];

export default function PurposeAccordionSplit({ items = defaultItems }) {
  const safeItems = items?.length ? items : defaultItems;
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = activeIndex === null ? null : safeItems[activeIndex] ?? null;
  const sectionRef = useRef(null);
  const inViewRef = useRef(true);

  const getBgLayer = () => document.getElementById("app-background-layer");

  const setBackground = (imageSrc) => {
    const layer = getBgLayer();
    if (!layer || !imageSrc) return;
    layer.style.backgroundImage = `url(${imageSrc})`;
  };

  const resetBackground = () => {
    const layer = getBgLayer();
    if (!layer) return;
    const defaultBg = layer.dataset.defaultBg;
    if (defaultBg) {
      layer.style.backgroundImage = `url(${defaultBg})`;
    }
  };

  useEffect(() => {
    if (inViewRef.current && activeItem?.image) {
      setBackground(activeItem?.image);
    } else if (inViewRef.current) {
      resetBackground();
    }
  }, [activeItem]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        inViewRef.current = entry.isIntersecting;

        if (entry.isIntersecting) {
          if (activeItem?.image) {
            setBackground(activeItem.image);
          } else {
            resetBackground();
          }
        } else {
          resetBackground();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
      resetBackground();
    };
  }, [activeItem]);

  return (
    <section ref={sectionRef} className="w-full py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 items-start">
          <div className="overflow-hidden rounded-2xl border border-neutral-200 bg-white/60 backdrop-blur">
            {safeItems.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <div
                  key={`${item.title}-${index}`}
                  className={index !== safeItems.length - 1 ? "border-b border-neutral-200" : ""}
                >
                  <button
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={`purpose-panel-${index}`}
                    onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
                    className="flex w-full items-center justify-between px-5 py-4 text-left transition hover:bg-neutral-50/70"
                  >
                    <span className="text-base font-semibold uppercase tracking-[0.12em] text-neutral-800">
                      {item.title}
                    </span>
                    <span className="text-lg leading-none text-neutral-500" aria-hidden="true">
                      {isActive ? "-" : "+"}
                    </span>
                  </button>
                  <div
                    id={`purpose-panel-${index}`}
                    className={`overflow-hidden px-5 transition-all duration-300 ${
                      isActive ? "max-h-40 pb-4 opacity-100" : "max-h-0 pb-0 opacity-0"
                    }`}
                  >
                    <p className="text-sm leading-relaxed text-neutral-600">{item.summary}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
