import { useState } from "react";

export default function TechnicalSystemList({ items = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col gap-5">
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <button
            key={item.title}
            type="button"
            aria-pressed={isActive}
            onClick={() => setActiveIndex(index)}
            className={`group !flex !w-full !flex-col !items-stretch !rounded-2xl !border !p-5 !text-left !outline-none transition-all duration-300 focus-visible:!ring-2 focus-visible:!ring-sky-400 focus-visible:!ring-offset-2 sm:!flex-row sm:!items-center sm:!p-6 ${
              isActive
                ? "!border-sky-400 !bg-[#1f3444] shadow-[0_18px_45px_rgba(32,83,116,0.18)]"
                : "!border-sky-200/80 !bg-white/80 hover:!-translate-y-0.5 hover:!border-sky-400 hover:!bg-white hover:!shadow-md"
            }`}
          >
            <span className="min-w-0 flex-1">
              <span
                className={`block text-[0.68rem] font-semibold uppercase leading-5 tracking-[0.24em] ${
                  isActive ? "!text-white" : "!text-sky-700"
                }`}
              >
                {item.title}
              </span>
              <span
                className={`mt-3 block text-sm leading-7 ${
                  isActive ? "!text-white" : "!text-slate-600"
                }`}
              >
                {item.description}
              </span>
            </span>

            <span
              className={`mt-4 inline-flex shrink-0 self-start rounded-full px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.16em] sm:ml-6 sm:mt-0 sm:self-center ${
                isActive
                  ? "bg-sky-500 !text-white"
                  : "bg-sky-100 !text-slate-800"
              }`}
            >
              {isActive ? "Selected" : "Included"}
            </span>
          </button>
        );
      })}
    </div>
  );
}
