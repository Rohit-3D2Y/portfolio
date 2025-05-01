import React, { useEffect, useRef, useState } from "react";

const Integrations = ({ data, reverse = false, scrollSpeed = 1, pauseOnHover = true }) => {
  const scrollerRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  // Safety check for data
  if (!data || data.length === 0) {
    return null;
  }

  useEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    let animationId;
    const scroll = () => {
      if (!scroller || (pauseOnHover && isPaused)) return;

      const maxScroll = scroller.scrollWidth / 3; // one third since we tripled the data
      
      if (reverse) {
        scroller.scrollLeft -= scrollSpeed;
        if (scroller.scrollLeft <= 0) {
          scroller.scrollLeft = maxScroll;
        }
      } else {
        scroller.scrollLeft += scrollSpeed;
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
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [reverse, scrollSpeed, isPaused, pauseOnHover]);

  // Triple the data for better looping margin
  const extendedData = [...data, ...data, ...data];

  return (
    <div className="w-full overflow-hidden">
      <div
        ref={scrollerRef}
        className="flex gap-4 pb-4 overflow-x-scroll no-scrollbar"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
        aria-label="Scrolling integration showcase"
      >
        {extendedData.map((tool, index) => (
          <div
            key={`${tool.name || `item-${index}`}-${index}`}
            className="flex-shrink-0 rounded-3xl"
          >
            <div className="p-4 rounded-3xl bg-slate-100 relative">
              <div className="absolute top-0 left-3 text-gray-300">o</div>
              <div className="flex justify-center bg-slate-200 p-2 rounded-3xl overflow-hidden">
                <img
                  className="rounded-3xl border-2 border-slate-300 md:h-64 md:w-96
                  w-72 h-52 object-contain"
                  src={tool.icon}
                  alt={tool.name || `Integration ${index}`}
                  loading="lazy"
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