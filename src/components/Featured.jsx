import React from "react";

const IconRefresh = (props) => (
  <svg viewBox="0 0 24 24" width="60" height="60" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 15.36-6.36M21 12a9 9 0 0 1-15.36 6.36" />
      <path d="M18.5 5.5v3.5H15" />
      <path d="M5.5 18.5V15H9" />
    </g>
  </svg>
);

const IconTruck = (props) => (
  <svg viewBox="0 0 24 24" width="60" height="60" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="7" width="12" height="8" rx="1.5" />
      <path d="M14 9h4l3 3v3h-3" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </g>
  </svg>
);

const IconHeart = (props) => (
  <svg viewBox="0 0 24 24" width="60" height="60" {...props}>
    <path
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21s-6.6-4.35-9.6-8.4C-1.2 7.2 3 2.4 7.5 4.8 9 5.55 10.5 7.2 12 9c1.5-1.8 3-3.45 4.5-4.2C21 2.4 25.2 7.2 21.6 12.6 18.6 16.65 12 21 12 21z"
    />
  </svg>
);

const IconRepair = (props) => (
  <svg viewBox="0 0 24 24" width="60" height="60" {...props}>
    <g
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
      <path d="M9 9l-2-2m10 10l2 2" />
    </g>
  </svg>
);

const items = [
  { id: 1, label: "Years of Trust", isTextLogo: true },
  { id: 2, label: "BIS Hallmarked", isImage: true, img: "/bis.png" },
  { id: 3, label: "Buyback Guarantee", Icon: IconRefresh },
  { id: 4, label: "Free Shipping", Icon: IconTruck },
  { id: 5, label: "Custom Jewellery Designing", Icon: IconHeart },
  { id: 6, label: "Jewellery Service / Repair", Icon: IconRepair },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#ebcc78] py-10">
      <div className="max-w-8xl mx-auto px-6 font-serif">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 text-center gap-6">
          {items.map(({ id, label, Icon, isImage, img, isTextLogo }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-2 p-4 rounded-xl"
            >
              <div className="h-20 flex items-center justify-center"> 
                {/* 👆 fixed container height for alignment */}
                {isTextLogo ? (
                  <span className="text-4xl sm:text-5xl font-bold text-amber-800 leading-none">
                    40+
                  </span>
                ) : isImage ? (
                  <img
                    src={img}
                    alt={label}
                    className="h-16 w-auto object-contain" // 👆 controlled size
                  />
                ) : (
                  <Icon className="text-amber-800 w-16 h-16" aria-hidden="true" />
                )}
              </div>

              <p className="text-lg sm:text-xl font-medium text-gray-900">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
