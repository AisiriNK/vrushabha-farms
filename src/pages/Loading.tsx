import { useEffect, useState } from "react";
import logo from "@/assets/logo.jpeg";

const Loading = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000); // Show for 3 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      <div className="flex flex-col items-center gap-6">
        <img
          src={logo}
          alt="Vrushabha Farms"
          className="h-32 w-32 sm:h-40 sm:w-40 object-contain animate-pulse"
        />
        <div className="text-center">
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground tracking-wide">
            Vrushabha <span className="text-primary">Farms</span>
          </h1>
          <p className="text-muted-foreground text-sm mt-2">A Healthy Choice</p>
        </div>
        <div className="flex gap-2 mt-4">
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0s" }}></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-2 h-2 rounded-full bg-primary animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
