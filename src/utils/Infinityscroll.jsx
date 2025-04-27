import React from 'react';

export default function InfiniteIconScroller() {
  return (
    <div className="w-[120px] h-16 overflow-hidden relative rounded  flex items-center">
      <div className="flex animate-scroll whitespace-nowrap">
        {/* Group 1 */}
        {icons.map((path, idx) => (
          <Icon key={`first-${idx}`} path={path} />
        ))}
        {/* Group 2 (duplicate) */}
        {icons.map((path, idx) => (
          <Icon key={`second-${idx}`} path={path} />
        ))}
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 10s linear infinite;
        }
      `}</style>
    </div>
  );
}

const icons = [
    "M12 2L14.09 8.26L20.97 8.27L15.45 12.14L17.54 18.39L12 14.52L6.46 18.39L8.55 12.14L3.03 8.27L9.91 8.26L12 2Z",
    "M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z",
    "M12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6L13.7 10.13L18.08 10.5L14.76 13.39L15.76 17.67L12 15.4Z",
    "M12 2L13.09 8.26L19.97 8.27L14.45 12.14L16.54 18.39L12 14.52L7.46 18.39L9.55 12.14L4.03 8.27L10.91 8.26L12 2Z",
    "M12 2L15 8L22 9L17 14L18 21L12 17L6 21L7 14L2 9L9 8L12 2Z",
  ];
  

function Icon({ path }) {
  return (
    <svg className="fill-gray-300 mx-1 h-8 w-8" viewBox="0 0 24 24">
      <path d={path} />
    </svg>
  );
}
