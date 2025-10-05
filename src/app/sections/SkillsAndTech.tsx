"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { useTheme } from "next-themes";
import logos from "@/lib/logos";
import { useEffect, useState } from "react";

function Logo({
  src,
  srcDark,
  alt,
  logoName,
}: {
  src: string;
  srcDark: string;
  alt: string;
  logoName: string;
}) {
  const [currentTheme, setCurrentTheme] = useState<string | undefined>("");
  const { theme } = useTheme();

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  return (
    <div className="flex items-center gap-2">
      {currentTheme === "dark" ? (
        <Image
          className="logo"
          src={srcDark ? srcDark : src}
          alt={alt}
          width={32}
          height={32}
        />
      ) : (
        <Image className="logo" src={src} alt={alt} width={32} height={32} />
      )}

      <p className="text-xs font-semibold hyphens-auto text-wrap">{logoName}</p>
    </div>
  );
}

export default function SkillsAndTech() {
  return (
    <div className="py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="px-6 md:px-12 lg:px-[20%] mb-12 lg:mb-24"
      >
        <p className="font-bold text-3xl mb-2">STACK</p>
        <p className="text-neutral-500 dark:text-neutral-300 text-sm w-full md:w-1/2">
          My tools are focused on{" "}
          <span className="text-zinc-900 font-medium dark:text-white">
            speed and developer experience
          </span>{" "}
          so I could focus more on solving problems. My tech revolves in
          JavaScript, NoSQL, and SQL
        </p>
      </motion.div>
      <div className="px-6 md:px-12 lg:px-[20%] flex flex-col gap-12">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col lg:grid lg:grid-cols-6 lg:gap-6"
        >
          <div className="mb-4 lg:m-0 lg:col-span-1">
            <p className="text-sm">FRONT-END</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {logos.frontend.map((logo) => (
              <Logo
                key={logo.id}
                src={logo.src}
                srcDark={logo.srcDark}
                alt={logo.alt}
                logoName={logo.name}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col lg:grid lg:grid-cols-6 lg:gap-6"
        >
          <div className="mb-4 lg:m-0 lg:col-span-1">
            <p className="text-sm">BACK-END</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {logos.backend.map((logo) => (
              <Logo
                key={logo.id}
                src={logo.src}
                srcDark={logo.srcDark}
                alt={logo.alt}
                logoName={logo.name}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col lg:grid lg:grid-cols-6 lg:gap-6"
        >
          <div className="mb-4 lg:m-0 lg:col-span-1">
            <p className="text-sm">TOOLS</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {logos.tools.map((logo) => (
              <Logo
                key={logo.id}
                src={logo.src}
                srcDark={logo.srcDark}
                alt={logo.alt}
                logoName={logo.name}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col lg:grid lg:grid-cols-6 lg:gap-6"
        >
          <div className="mb-4 lg:m-0 lg:col-span-1">
            <p className="text-sm">AI INTEGRATIONS</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {logos.aiIntegrations.map((logo) => (
              <Logo
                key={logo.id}
                src={logo.src}
                srcDark={logo.srcDark}
                alt={logo.alt}
                logoName={logo.name}
              />
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col lg:grid lg:grid-cols-6 lg:gap-6"
        >
          <div className="mb-4 lg:m-0 lg:col-span-1">
            <p className="text-sm">OTHERS</p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {logos.others.map((logo) => (
              <Logo
                key={logo.id}
                src={logo.src}
                srcDark={logo.srcDark}
                alt={logo.alt}
                logoName={logo.name}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
