"use client";

import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { Button } from "@heroui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <Button
        className="fixed top-4 right-4 z-50 p-2 rounded-lg glass-effect glass-effect-default"
        aria-label="Toggle theme"
      >
        <SunIcon className="h-5 w-5" />
      </Button>
    );
  }

  const currentTheme = resolvedTheme || theme;

  return (
    <Button
      onPress={toggleTheme}
      className="fixed top-4 right-4 z-50 p-2 rounded-lg glass-effect glass-effect-default"
      aria-label="Toggle theme"
    >
      {currentTheme === "dark" ? (
        <SunIcon className="h-5 w-5" />
      ) : (
        <MoonIcon className="h-5 w-5" />
      )}
    </Button>
  );
}
