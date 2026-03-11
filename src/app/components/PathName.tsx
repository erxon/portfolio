"use client"

import { usePathname } from "next/navigation";

export default function PathName() {
  const pathname = usePathname();
  const pathName = pathname.split("/")[2];
  return pathName.charAt(0).toUpperCase() + pathName.slice(1);
}
