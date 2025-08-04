"use client";

import { useTheme } from "next-themes";
import ThreadsBase from "./ThreadsBase";
import { useEffect, useState } from "react";

export default function Threads() {
  const [currentTheme, setCurrentTheme] = useState<string>("");
  const { theme } = useTheme();

  useEffect(() => {
    setCurrentTheme(theme!);
  }, [theme]);

  return (
    <ThreadsBase
      color={currentTheme === "light" ? [0, 0, 0] : [1, 1, 1]}
      amplitude={1}
      distance={0.1}
      enableMouseInteraction={true}
    />
  );
}
