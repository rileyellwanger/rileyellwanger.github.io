"use client";

import { Button } from "@heroui/button";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitch() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <span
        aria-hidden
        className="inline-flex h-10 w-10 items-center justify-center"
      />
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      isIconOnly
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      size="sm"
      variant="light"
      onPress={() => setTheme(isDark ? "light" : "dark")}
    >
      <FontAwesomeIcon icon={isDark ? faSun : faMoon} />
    </Button>
  );
}
