import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center bg-gradient-to-br from-gray-50 to-white px-4 pt-24 pb-16">
        <div className="text-center max-w-md">
          <p className="text-sm font-semibold text-voiceup-skyblue uppercase tracking-wide mb-2">
            404 error
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold text-voiceup-navy mb-4">
            Page not found
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            We couldn&apos;t find the page you&apos;re looking for. It may have been moved or deleted.
          </p>
          <Button
            asChild
            className="bg-voiceup-skyblue hover:bg-voiceup-periwinkle text-white px-6 py-2 rounded-full"
          >
            <Link to="/">Return home</Link>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
