// TrustBadges.jsx
import React from "react";

const IconMedal = (props) => (
  <svg viewBox="0 0 24 24" width="42" height="42" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="9" r="4" />
      <path d="M9 13l-2.2 7 3.2-2 2 2 2-2 3.2 2L15 13" />
    </g>
  </svg>
);

const IconBIS = (props) => (
  <svg viewBox="0 0 24 24" width="42" height="42" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l8 6v5c0 4.418-3.582 7-8 7s-8-2.582-8-7V9l8-6z" />
      <rect x="7.5" y="10.5" width="9" height="5" rx="1.2" />
    </g>
    <text x="12" y="14.5" textAnchor="middle" fontSize="4.3" fontFamily="ui-sans-serif, system-ui" fill="currentColor">BIS</text>
  </svg>
);

const IconRefresh = (props) => (
  <svg viewBox="0 0 24 24" width="42" height="42" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12a9 9 0 0 1 15.36-6.36M21 12a9 9 0 0 1-15.36 6.36" />
      <path d="M18.5 5.5v3.5H15" />
      <path d="M5.5 18.5V15H9" />
    </g>
  </svg>
);

const IconTruck = (props) => (
  <svg viewBox="0 0 24 24" width="42" height="42" {...props}>
    <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="12" height="8" rx="1.5" />
      <path d="M14 9h4l3 3v3h-3" />
      <circle cx="7" cy="18" r="2" />
      <circle cx="18" cy="18" r="2" />
    </g>
  </svg>
);

const items = [
  { id: 1, label: "40+ Years of Trust", Icon: IconMedal },
  { id: 2, label: "BIS Hallmarked", Icon: IconBIS },               // (with logo-like shield)
  { id: 3, label: "Buyback Guarantee", Icon: IconRefresh },
  { id: 4, label: "Free Shipping", Icon: IconTruck },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#ebcc78] py-8">
      <div className="max-w-8xl mx-auto px-4 font-serif">   {/* changed here */}
        <div className="grid grid-cols-2 sm:grid-cols-4 text-center">
          {items.map(({ id, label, Icon }) => (
            <div
              key={id}
              className="flex flex-col items-center gap-6 p-4 rounded-xl sm:bg-transparent  sm:shadow-none"
            >
              <Icon className="text-amber-800" aria-hidden="true" />
              <p className="text-sm sm:text-base font-medium text-gray-900 leading-snug">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

