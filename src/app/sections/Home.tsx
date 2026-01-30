"use client";

import { Button } from "@/components/ui/button";
import Threads from "../components/Threads";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();
  return (
    <section className="relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 z-0 h-[600px] md:h-[70vh]"
      >
        <Threads />
      </motion.div>
      {/* Hero */}
      <div className="relative z-20 min-h-[70vh] flex flex-col justify-center items-center mx-auto px-6 max-w-5xl text-center text-balance">
        <motion.p className="text-2xl md:text-5xl mb-4 tracking-wide md:w-fit text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h1 className="tracking-wider text-4xl md:text-7xl font-bold bg-gradient-to-r from-zinc-800 via-zinc-600 to-zinc-900 dark:from-zinc-300 dark:via-zinc-100 dark:to-zinc-500 bg-clip-text text-transparent">
              Ericson Castasus
            </h1>
          </motion.span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-3/4 md:text-xl"
        >
          <div>
            <div className="relative inline-block text-balance">
              <motion.span
                className="absolute inset-0 bg-cyan-500 dark:bg-blue-500 rounded-sm z-0"
                initial={{ scaleX: 0, color: "#000" }}
                animate={{ scaleX: 1 }}
                transition={{
                  delay: 1,
                  duration: 0.6,
                  ease: "easeOut",
                }}
                style={{ transformOrigin: "left" }}
              />
              <span className="px-1 font-medium relative z-10 dark:text-white">
                Full-Stack Developer.
              </span>
            </div>{" "}
            Problem Solver. Lifelong Learner. Building the next generation of
            web applications.
          </div>
          <div className="gap-6 flex items-center justify-center mt-8">
            {theme === "light" ? (
              <Image
                src="/tech-highlights/aws-color-light.png"
                alt="AWS"
                width={52}
                height={52}
                className="hover:scale-110 transition-all duration-300"
              />
            ) : (
              <Image
                src="/tech-highlights/aws-color.png"
                alt="AWS"
                width={52}
                height={52}
                className="hover:scale-110 transition-all duration-300"
              />
            )}
            <Image
              src="/tech-highlights/langgraph-color.png"
              alt="LangGraph"
              width={52}
              height={52}
              className="hover:scale-110 transition-all duration-300"
            />
            <Image
              src="/logo/nextjs.png"
              alt="Next.js"
              width={52}
              height={52}
              className="hover:scale-110 transition-all duration-300"
            />
          </div>
          <Button className="mt-8" size={"lg"} asChild>
            <Link
              href="https://linkedin.com/in/ericson-castasus"
              target="_blank"
            >
              Let&apos;s work together
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
