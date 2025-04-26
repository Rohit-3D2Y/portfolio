import React, { useEffect, useRef } from "react";

const Integrations = ({ data, reverse = false }) => {
  const scrollerRef = useRef(null);
  
  useEffect(() => {
    if (!scrollerRef.current) return;
    
    // Clone the first few items and append them to create the seamless effect
    const scrollerContent = scrollerRef.current;
    const scrollerItems = Array.from(scrollerContent.children);
    
    // Calculate the total width of all items
    const scrollerWidth = scrollerItems.reduce((acc, item) => acc + item.offsetWidth + 16, 0); // 16px for gap
    
    let animationId;
    const scroll = () => {
      if (!scrollerContent) return;
      
      if (reverse) {
        scrollerContent.scrollLeft -= 1;
        // When we scroll to the beginning, jump to the end (seamless loop)
        if (scrollerContent.scrollLeft <= 0) {
          scrollerContent.scrollLeft = scrollerWidth / 2;
        }
      } else {
        scrollerContent.scrollLeft += 1;
        // When we scroll to the end, jump back to the beginning (seamless loop)
        if (scrollerContent.scrollLeft >= scrollerWidth / 2) {
          scrollerContent.scrollLeft = 0;
        }
      }
      
      animationId = requestAnimationFrame(scroll);
    };
    
    // Set initial scroll position for reverse animation
    if (reverse) {
      scrollerContent.scrollLeft = scrollerWidth / 2;
    }
    
    // Start the animation
    animationId = requestAnimationFrame(scroll);
    
    // Clean up
    return () => cancelAnimationFrame(animationId);
  }, [reverse]);
  
  // Double the data to ensure we have enough content for the seamless loop
  const extendedData = [...data, ...data];
  
  return (
    <div className="w-full overflow-hidden">
      <div 
        ref={scrollerRef}
        className="flex gap-4 pb-4 px-4 overflow-x-scroll scrollbar-hide"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {extendedData.map((tool, index) => (
          <div 
            key={`${tool.name}-${index}`} 
            className="flex-shrink-0 rounded-3xl"
          >
            <div className=" p-4 rounded-3xl bg-[#f3f3f3] relative">
                <div className="absolute top-0 left-3 text-[bbbcbe]">o</div>
            <div className="flex justify-center  bg-[#bbbcbe] p-2 rounded-3xl">
              <img
                className="rounded-3xl  h-[250px] w-[400px]"
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