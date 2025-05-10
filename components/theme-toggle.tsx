"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full transition-all duration-300 hover:bg-primary/20 dark:hover:text-A7FFEB dark:text-B2BFE2"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <div className="relative">
        {theme === "light" ? (
          <Moon className="h-5 w-5 transition-all" />
        ) : (
          <Sun className="h-5 w-5 transition-all text-A7FFEB" />
        )}
        <span className="sr-only">Toggle theme</span>
      </div>
    </Button>
  );
}
