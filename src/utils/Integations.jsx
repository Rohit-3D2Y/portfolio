import React, { useEffect, useRef } from "react";

const Integrations = ({ data, reverse = false }) => {
  const scrollerRef = useRef(null);

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationId;

    const scroll = () => {
      if (!scroller) return;

      const maxScroll = scroller.scrollWidth / 3; // one third since we tripled the data

      if (reverse) {
        scroller.scrollLeft -= 1;
        if (scroller.scrollLeft <= 0) {
          scroller.scrollLeft = maxScroll;
        }
      } else {
        scroller.scrollLeft += 1;
        if (scroller.scrollLeft >= maxScroll) {
          scroller.scrollLeft = 0;
        }
      }

      animationId = requestAnimationFrame(scroll);
    };

    // Set initial position for reverse scroll
    if (reverse) {
      scroller.scrollLeft = scroller.scrollWidth / 3;
    }

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, [reverse]);

  // Triple the data for better looping margin
  const extendedData = [...data, ...data, ...data];

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollerRef}
        className="flex gap-4 pb-4 overflow-x-scroll scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {extendedData.map((tool, index) => (
          <div
            key={`${tool.name}-${index}`}
            className="flex-shrink-0 rounded-3xl"
          >
            <div className="p-4 rounded-3xl bg-[#f3f3f3] relative">
              <div className="absolute top-0 left-3 text-[#bbbcbe]">o</div>
              <div className="flex justify-center bg-slate-200 p-2 rounded-3xl overflow-x-clip">
                <img
                  className="rounded-3xl border-2 border-slate-300 md:h-[250px] md:w-[400px] 
                  w-[280px] h-[200px] object-contain"
                  src={tool.icon}
                  alt={tool.name}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Integrations;
