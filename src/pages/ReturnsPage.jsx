import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ReturnsPage() {
  return (
    <div className="flex flex-col min-h-screen font-serif">
      <Navbar />
      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 text-gray-800">
        <h1 className="text-3xl font-bold mb-6 text-[#542018]">Return Policy</h1>
        <p className="mb-4">
          At Sethi Jewellers, we aim for 100% customer satisfaction. If you are not satisfied with your purchase, you may return it under the following conditions:
        </p>
        <p className="mb-4">
          1. Items must be returned within 7 days of purchase.  
        </p>
        <p className="mb-4">
          2. Products must be unused, undamaged, and in original packaging.  
        </p>
        <p className="mb-4">
          3. Proof of purchase is required for all returns.  
        </p>
      </main>
      <Footer />
    </div>
  );
}
