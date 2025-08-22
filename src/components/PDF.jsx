// // CareGuides.jsx
// import React from "react";
// import { Diamond, Gem, Crown, Star } from "lucide-react"; // Lucide icons

// const guides = [
//   {
//     id: 1,
//     title: "Silver Care",
//     desc: "Learn the best practices to keep your silver shining forever.",
//     pdf: "/pdfs/silver-care.pdf",
//     icon: <Gem className="h-10 w-10 text-[#8B4513]" />, // brown tone
//   },
//   {
//     id: 2,
//     title: "Gold Care",
//     desc: "Tips to preserve the shine and value of your gold jewelry.",
//     pdf: "/pdfs/gold-care.pdf",
//     icon: <Crown className="h-10 w-10 text-[#8B4513]" />,
//   },
//   {
//     id: 3,
//     title: "Diamond Care",
//     desc: "A guide to keep your diamonds sparkling at their best.",
//     pdf: "/pdfs/diamond-care.pdf",
//     icon: <Diamond className="h-10 w-10 text-[#8B4513]" />,
//   },
//   {
//     id: 4,
//     title: "Platinum Care",
//     desc: "Maintain the durability and elegance of platinum jewelry.",
//     pdf: "/pdfs/platinum-care.pdf",
//     icon: <Star className="h-10 w-10 text-[#8B4513]" />,
//   },
// ];

// export default function CareGuides() {
//   return (
//     <section className="bg-gradient-to-b from-[#ebcc78] to-[#ebcc78] py-14">
//   <div className="max-w-7xl mx-auto px-6">
//     {/* Section Logo + Heading */}
//     <div className="text-center mb-12">
//       <div className="flex justify-center mb-4">
//         {/* You can replace this diamond logo with your brand logo */}
//         <Diamond className="h-14 w-14 text-[#8B4513]" />
//       </div>
//       <h2 className="text-2xl font-bold text-[#542018]">Jewelry Care Guides</h2>
//       <p className="text-[#5C4033] text-sm mt-2">
//         Download easy care instructions for your precious jewelry
//       </p>
//     </div>

//     {/* Grid */}
//     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
//       {guides.map(({ id, title, desc, pdf, icon }) => (
//         <div key={id} className="flex flex-col items-center">
//           <div className="mb-4">{icon}</div>
//           <h3 className="font-semibold text-lg text-[#4B2E2E] mb-2">{title}</h3>
//           <p className="text-[#6E4B3A] text-sm mb-4">{desc}</p>
//           <a
//             href={pdf}
//             download
//             className="px-4 py-2 text-sm font-medium rounded-full bg-[#542018] text-[#ebcc78] hover:bg-[#A0522D] transition"
//           >
//             Download PDF
//           </a>
//         </div>
//       ))}
//     </div>
//   </div>
// </section>

//   );
// }
// CareGuides.jsx
import React from "react";
import { CreditCard, Ruler, Gem, Diamond } from "lucide-react"; // Lucide icons

const guides = [
  {
    id: 1,
    title: "Payment Guide",
    desc: "Understand the payment methods and secure checkout process.",
    pdf: "/pdfs/payment-guide.pdf",
    icon: <CreditCard className="h-10 w-10 text-[#8B4513]" />, // credit card icon
  },
  {
    id: 2,
    title: "Ring Size Calculator",
    desc: "Find your perfect ring size with our simple measurement guide.",
    pdf: "/pdfs/ring-size-calculator.pdf",
    icon: <Ruler className="h-10 w-10 text-[#8B4513]" />, // ruler icon
  },
  {
    id: 3,
    title: "Jewelry Care Tips",
    desc: "Essential tips to preserve the shine and elegance of your jewelry.",
    pdf: "/pdfs/jewelry-care-tips.pdf",
    icon: <Gem className="h-10 w-10 text-[#8B4513]" />, // gem icon
  },
];

export default function CareGuides() {
  return (
    <section className="bg-gradient-to-b from-[#ebcc78] to-[#ebcc78] py-14">
      <div className="max-w-7xl mx-auto px-6 font-serif">
        {/* Section Logo + Heading */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            {/* Section logo */}
            <Diamond className="h-14 w-14 text-[#8B4513]" />
          </div>
          <h2 className="text-2xl font-bold text-[#542018]">Helpful Guides</h2>
          <p className="text-[#5C4033] text-sm mt-2">
            Download easy guides to assist you with shopping and jewelry care
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 text-center">
          {guides.map(({ id, title, desc, pdf, icon }) => (
            <div key={id} className="flex flex-col items-center">
              <div className="mb-4">{icon}</div>
              <h3 className="font-semibold text-lg text-[#4B2E2E] mb-2">{title}</h3>
              <p className="text-[#6E4B3A] text-sm mb-4">{desc}</p>
              <a
                href={pdf}
                download
                className="px-4 py-2 text-sm font-medium rounded-full bg-[#542018] text-[#ebcc78] hover:bg-[#A0522D] transition"
              >
                Download PDF
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
