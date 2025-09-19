import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar"; // ✅ adjust path if needed
import Footer from "../components/Footer";

export default function GuidesPage() {
  const location = useLocation();
  const [active, setActive] = useState("payment");

  // Automatically set active tab based on URL hash
  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace("#", "");
      if (hash === "payment-guide") setActive("payment");
      else if (hash === "ring-size") setActive("ring");
      else if (hash === "care-tips") setActive("care");
    }
  }, [location.hash]);

  return (
    <section className="bg-gradient-to-b from-[#ebcc78] to-[#ebcc78] min-h-screen font-serif">
      {/* Navbar */}
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-14">
        {/* Top Buttons */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 mb-10">
          <button
            onClick={() => setActive("payment")}
            className={`px-2 sm:px-5 py-2 rounded-full font-medium text-xs sm:text-sm transition ${
              active === "payment"
                ? "bg-[#542018] text-[#ebcc78]"
                : "bg-[#ebcc78] text-[#542018] border border-[#542018]"
            }`}
          >
            Payment Guide
          </button>
          <button
            onClick={() => setActive("ring")}
            className={`px-2 sm:px-5 py-2 rounded-full font-medium text-xs sm:text-sm transition ${
              active === "ring"
                ? "bg-[#542018] text-[#ebcc78]"
                : "bg-[#ebcc78] text-[#542018] border border-[#542018]"
            }`}
          >
            Ring Size
          </button>
          <button
            onClick={() => setActive("care")}
            className={`px-2 sm:px-5 py-2 rounded-full font-medium text-xs sm:text-sm transition ${
              active === "care"
                ? "bg-[#542018] text-[#ebcc78]"
                : "bg-[#ebcc78] text-[#542018] border border-[#542018]"
            }`}
          >
            Jewellery Care
          </button>
        </div>

        {/* Content Area */}
        <div className="bg-white/80 rounded-xl p-6 shadow-md text-[#4B2E2E] space-y-4">

          {/* ========================== PAYMENT ========================== */}
          {active === "payment" && (
            <div id="payment-guide">
              <h2 className="text-lg sm:text-xl font-bold mb-3">Payment Guide</h2>

              <p className="mb-3">
                Greetings!<br />
                Thank you for choosing <b>Sethi Jewellers</b>. We are delighted to assist you with your
                purchase. You can make the payment by the following means:
              </p>

              {/* 1. Bank Transfer */}
              <h3 className="font-semibold mt-4">1. Bank Transfer</h3>
              <div className="mt-2 p-4 bg-[#f9f4e7] rounded-lg shadow-sm">
                <p><b>Bank:</b> Punjab National Bank</p>
                <p><b>Branch:</b> Sec 16d, Chandigarh</p>
                <p><b>Current A/C:</b> 0575002100056311</p>
                <p><b>IFSC Code:</b> PUNB0057500</p>
                <p><b>Swift Code:</b> PUNBINBBC16</p>
              </div>

              {/* 2. UPI */}
              <h3 className="font-semibold mt-6">2. UPI</h3>
              <img
                src="/Pdfs/qr.jpg"
                alt="UPI Payment"
                className="mt-3 rounded-lg shadow-md mx-auto w-full max-w-[280px] sm:max-w-[350px] h-auto"
              />
              <div className="mt-4 p-4 bg-[#f9f4e7] rounded-lg shadow-sm">
                <p><b>Bank:</b> State Bank of India</p>
                <p><b>Branch:</b> Sec 16, Chandigarh</p>
                <p><b>Current A/C:</b> 37930674195</p>
                <p><b>IFSC Code:</b> SBIN0050736</p>
              </div>

              <p className="mt-3">
                Please enter whole UPI ID – <b>8968778180@okbizaxis</b>
              </p>

              {/* 3. Debit / Credit Card */}
              <h3 className="font-semibold mt-6">3. Debit / Credit Card</h3>
              <h4 className="mt-3 font-medium">Please note:</h4>
              <ul className="list-disc pl-6 space-y-1 mt-1">
                <li>While using UPI, please enter the whole UPI ID – <b>8968778180@okbizaxis</b></li>
                <li>Instant payment of up to <b>₹5 lac</b> can be made via IMPS</li>
                <li>Once the payment is made, kindly send us a screenshot at <b>8968778180</b></li>
              </ul>

              <p className="mt-4">
                Thanks for placing your trust with us and giving us an opportunity to serve you.<br />
                Should you have any questions, please do not hesitate to contact us.
              </p>
              <p className="mt-4">
                Regards,<br />
                <b>Sethi Jewellers</b><br />
                SCO 15, Sector 16, Chandigarh<br />
                +91 8968778180
              </p>
            </div>
          )}

          {/* ========================== RING SIZE ========================== */}
          {active === "ring" && (
            <div id="ring-size">
              <h2 className="text-lg sm:text-xl font-bold mb-3">Ring Size Calculator Guide</h2>

              <p className="mb-3">
                Finding the perfect ring size is essential for comfort and fit. Use the simple
                steps below to measure your finger size and compare it with the chart.
              </p>

              {/* Procedure #1 */}
              <h3 className="font-semibold mt-4">Procedure #1: Measure with Paper or Thread</h3>
              <h4 className="mt-2 font-medium">Step 1</h4>
              <p>
                Cut a thin strip of paper or thread. Wrap it around the base of your finger.<br />
                Mark the point where the paper or thread overlaps.
              </p>
              <h4 className="mt-2 font-medium">Step 2</h4>
              <p>
                Lay the strip flat and measure its length with a ruler (in millimeters).<br />
                Compare your measurement with the chart below to find your ring size.
              </p>

              {/* Procedure #2 */}
              <h3 className="font-semibold mt-6">Procedure #2: Existing Ring Method</h3>
              <p className="mt-2">
                Use a ring you own. Place your ring on a scale or ruler.
              </p>

              <img
                src="/Pdfs/ring1.png"
                alt="Measure ring size with paper or thread"
                className="mt-6 rounded-lg shadow-md mx-auto max-w-full h-auto"
              />

              <h4 className="mt-2 font-medium">Measure Diameter</h4>
              <p>
                Measure the inside diameter in millimeters.<br />
                Compare with the chart below for your size.
              </p>

              {/* Full Ring Size Table */}
              <div className="overflow-x-auto mt-6">
                <table className="table-auto border border-[#542018] text-sm w-full text-center">
                  <thead className="bg-[#542018] text-[#ebcc78]">
                    <tr>
                      <th className="px-2 py-1 border border-[#542018]">Ring Size (India)</th>
                      <th className="px-2 py-1 border border-[#542018]">Circumference (inches)</th>
                      <th className="px-2 py-1 border border-[#542018]">Circumference (mm)</th>
                      <th className="px-2 py-1 border border-[#542018]">Diameter (mm)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      [1, 0.51, 13.1, 4.2],
                      [2, 0.52, 13.3, 4.3],
                      [3, 0.54, 13.7, 4.4],
                      [4, 0.55, 13.9, 4.5],
                      [5, 0.56, 14.3, 4.6],
                      [6, 0.57, 14.7, 4.7],
                      [7, 0.59, 15.1, 4.8],
                      [8, 0.60, 15.3, 4.9],
                      [9, 0.61, 15.5, 5.0],
                      [10, 0.62, 15.9, 5.1],
                      [11, 0.64, 16.3, 5.2],
                      [12, 0.65, 16.5, 5.3],
                      [13, 0.66, 16.9, 5.4],
                      [14, 0.68, 17.3, 5.5],
                      [15, 0.69, 17.5, 5.6],
                      [16, 0.70, 17.9, 5.7],
                      [17, 0.71, 18.1, 5.8],
                      [18, 0.72, 18.5, 5.9],
                      [19, 0.73, 18.7, 6.0],
                      [20, 0.74, 19.1, 6.1],
                      [21, 0.76, 19.3, 6.2],
                      [22, 0.77, 19.7, 6.3],
                      [23, 0.78, 19.9, 6.4],
                      [24, 0.80, 20.4, 6.5],
                      [25, 0.81, 20.6, 6.6],
                      [26, 0.82, 21.0, 6.7],
                      [27, 0.84, 21.4, 6.8],
                      [28, 0.85, 21.6, 6.9],
                      [29, 0.86, 22.0, 7.0],
                      [30, 0.87, 22.2, 7.1],
                    ].map(([size, inches, mm, dia], idx) => (
                      <tr key={size} className={idx % 2 === 0 ? "bg-white" : "bg-[#f9f4e7]"}>
                        <td className="border border-[#542018] px-2 py-1">{size}</td>
                        <td className="border border-[#542018] px-2 py-1">{inches}</td>
                        <td className="border border-[#542018] px-2 py-1">{mm}</td>
                        <td className="border border-[#542018] px-2 py-1">{dia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <img
                  src="/Pdfs/ring2.png"
                  alt="Measure inside diameter of a ring"
                  className="mt-6 rounded-lg shadow-md mx-auto max-w-full h-auto"
                />
              </div>
            </div>
          )}

          {/* ========================== CARE ========================== */}
          {active === "care" && (
            <div id="care-tips">
              <h2 className="text-lg sm:text-xl font-bold mb-3">Jewellery Care Guide</h2>

              <p className="mb-3">
                Your jewellery is more than just an accessory, it’s an investment, a memory, and a part
                of your story. With the right care, your treasured pieces can shine beautifully for
                generations. Here are some simple but effective tips:
              </p>

              {/* Tip 1 */}
              <h3 className="font-semibold mt-4">1. Clean your jewellery gently</h3>
              <p>
                The best way to keep your jewellery sparkling is also the simplest. Use a soft brush with
                mild soap and lukewarm water to gently clean your pieces. Avoid harsh cleaners or abrasive
                cloths, as these can scratch delicate metals and stones. Pat dry with a microfiber cloth.
              </p>
              <img
                src="/Pdfs/1.png"
                alt="Jewellery Care Tips"
                className="mt-6 rounded-lg shadow-md mx-auto max-w-full h-auto"
              />

              {/* Tip 2 */}
              <h3 className="font-semibold mt-4">2. Store jewellery safely</h3>
              <p>
                Always store your jewellery in a cool, dry place. Use individual pouches or anti-tarnish
                cloths to prevent scratching and tarnishing. Pearls and opals are particularly delicate and
                should be stored away from direct air exposure. Avoid tossing jewellery into drawers where
                it can easily get tangled or damaged.
              </p>
              <img
                src="/Pdfs/2.png"
                alt="Jewellery Care Tips"
                className="mt-6 rounded-lg shadow-md mx-auto max-w-full h-auto"
              />

              {/* Tip 3 */}
              <h3 className="font-semibold mt-4">3. Protect from chemicals</h3>
              <p>
                Everyday cosmetics like perfumes, lotions, and hairsprays can damage or discolor metals
                and stones. Always put on jewellery after applying beauty products. Remove your pieces
                before swimming, cleaning, or exercising to prevent exposure to harsh chemicals like
                chlorine and sweat.
              </p>
              <img
                src="/Pdfs/3.png"
                alt="Jewellery Care Tips"
                className="mt-6 rounded-lg shadow-md mx-auto max-w-full h-auto"
              />

              {/* Tip 4 */}
              <h3 className="font-semibold mt-4">4. Keep away from light & heat</h3>
              <p>
                Sunlight and high temperatures can affect certain gems, causing them to fade, crack, or
                lose their natural color. Opals, pearls, and amber are especially sensitive to light and
                heat. Store them in shaded, temperature-controlled spaces to preserve their beauty.
              </p>
              <img
                src="/Pdfs/4.png"
                alt="Jewellery Care Tips"
                className="mt-6 rounded-lg shadow-md mx-auto max-w-full h-auto"
              />

              {/* Tip 5 */}
              <h3 className="font-semibold mt-4">5. Regular Professional Check-ups</h3>
              <p>
                Jewellery, especially those with gemstones, benefits from regular professional
                maintenance. Have clasps, prongs, and settings checked by a jeweller once or twice a year
                to ensure stones are secure and metal is in good condition.
              </p>

              {/* Final Tip */}
              <p className="mt-4">
                <b>Final tip:</b> Jewellery is a premium product, so always handle it with care.<br />
                We care for our clothes, cars, watches; similarly, our jewellery also needs some care
                so that it maintains charm for long, following these simple steps.
              </p>

              {/* Optional Image
              <img
                src="/images/jewellery-care.jpg"
                alt="Jewellery Care Tips"
                className="mt-6 rounded-lg shadow-md mx-auto max-w-full h-auto"
              /> */}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </section>
  );
}
