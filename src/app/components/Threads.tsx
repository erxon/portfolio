"use client";

import { useTheme } from "next-themes";
import ThreadsBase from "./ThreadsBase";

export default function Threads() {
  const { theme } = useTheme();
  return (
    <ThreadsBase
      color={theme === "light" ? [0, 0, 0] : [1, 1, 1]}
      amplitude={1}
      distance={0.1}
      enableMouseInteraction={true}
    />
  );
}
