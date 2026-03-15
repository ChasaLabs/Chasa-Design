import { useEffect, useRef, useState } from "react";
import movementBg from "../assets/Movement.png";
import gatheringBg from "../assets/Gathering_Accordion.png";
import serviceBg from "../assets/Service.png";
import dwellingBg from "../assets/Dwelling.png";

const defaultItems = [
  {
    title: "Movement",
    lead:
      "Designing circulation that feels intuitive — from arrival to threshold to destination.",
    body:
      "We shape movement through clear sightlines, deliberate sequencing, and spaces that reduce friction. Paths for pedestrians, vehicles, and service flow are resolved as one coordinated system, so the experience remains calm even under peak use. The result is architecture that guides without shouting.",
    image: movementBg,
  },
  {
    title: "Gathering",
    lead:
      "Spaces that bring people together, with comfort, acoustics, and identity built in.",
    body:
      "Gathering needs more than floor area — it needs proportion, light, and a sense of orientation. We design places where connection happens naturally: entrances that welcome, edges that support lingering, and interiors that adapt to different moments. The atmosphere stays warm and legible, day or night.",
    image: gatheringBg,
  },
  {
    title: "Service",
    lead:
      "Clear, resilient environments where function is precise and dignity is preserved.",
    body:
      "Service spaces must work reliably, but they can also feel humane. We prioritize clarity of layout, safe access, and robust detailing — while using light, scale, and finish to create calm. The outcome is a place that performs under pressure and remains welcoming.",
    image: serviceBg,
  },
  {
    title: "Dwelling",
    lead:
      "Homes that balance privacy and community, with everyday life at the center.",
    body:
      "Dwelling is about rhythm: quiet spaces, shared spaces, and the transitions between them. We emphasize daylight, ventilation, and durable material choices that age gracefully. The architecture supports long-term comfort while still expressing a clean, modern character.",
    image: dwellingBg,
  },
];

export default function PurposeAccordionSplit({ items = defaultItems }) {
  const safeItems = items?.length ? items : defaultItems;
  const [activeIndex, setActiveIndex] = useState(null);
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
    <section
      ref={sectionRef}
      className="accordion-scope w-full border-b border-white/10 pt-24 pb-16 md:pb-24"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 items-start">
          <div className="relative rounded-3xl">
            <div className="relative z-10">
              <div className="rounded-2xl bg-black/5 p-3 sm:p-4">
                <div className="flex flex-col gap-4">
                  {safeItems.map((item, index) => {
                    const isActive = index === activeIndex;
                    const rowAlignment = index % 2 === 0 ? "justify-start" : "justify-start md:justify-end";

                    return (
                      <div key={`${item.title}-${index}`} className="relative block w-full">
                        <div className={`flex w-full ${rowAlignment}`}>
                          <div className="w-full max-w-xl rounded-xl border border-black/20 bg-white shadow-sm overflow-hidden">
                            <button
                              type="button"
                              aria-expanded={isActive}
                              aria-controls={`purpose-panel-${index}`}
                              onClick={() => setActiveIndex((prev) => (prev === index ? null : index))}
                              className="w-full flex items-center justify-between px-6 py-5 text-white"
                            >
                              <span className="text-base font-semibold uppercase tracking-[0.12em]">
                                {item.title}
                              </span>
                              <span className="text-lg leading-none" aria-hidden="true">
                                {isActive ? "-" : "+"}
                              </span>
                            </button>
                          <div
                            id={`purpose-panel-${index}`}
                            className={`overflow-hidden transition-all duration-300 ${
                              isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                            }`}
                          >
                            <div className="px-6 pb-6 pt-2">
                              <p
                                className="text-sm font-medium !text-white !opacity-100"
                                style={{ color: "#fff" }}
                              >
                                {item.lead}
                              </p>
                              <p
                                className="mt-2 text-sm leading-relaxed !text-white !opacity-100"
                                style={{ color: "#fff" }}
                              >
                                {item.body}
                              </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
