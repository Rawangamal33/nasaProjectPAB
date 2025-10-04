import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";
import AppSec from "./AppSec";

const App = () => {
  const { resolvedTheme } = useTheme();

  return (
    <div className="min-h-svh space-gradient">
      <div className="flex min-h-svh flex-col  relative">
        <div className="relative z-100">
          <AppSec />
        </div>
        <StarsBackground
          starColor={resolvedTheme === "dark" ? "#FFF" : "#CBD5E1"}
          starDensity={0.0005}
          className={cn(
            "absolute inset-0 flex items-center justify-center",
            "bg-transparent"
          )}
        />

        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>
  );
};

export default App;
