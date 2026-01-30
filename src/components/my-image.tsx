"use client";

import Image from "next/image";
import { useState } from "react";

export function MyImage() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative h-26 w-26 rounded-full overflow-hidden border-4 border-primary shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src="/images/ericson.png"
        alt="Ericson Castasus"
        fill
        className="object-cover transition-transform duration-500"
        style={{ transform: isHovered ? "scale(1.05)" : "scale(1)" }}
      />
    </div>
  );
}
