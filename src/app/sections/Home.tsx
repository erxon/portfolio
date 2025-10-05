"use client";

import Threads from "../components/Threads";
import { motion } from "motion/react";

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        transition={{ duration: 0.3 }}
      >
        <div
          style={{
            width: "100%",
            height: "600px",
            position: "absolute",
            zIndex: 0,
          }}
        >
          <Threads />
        </div>
      </motion.div>
      <div className="z-10 h-[500px] md:w-3/4 lg:w-fit flex flex-col justify-center items-center mx-6 md:mx-12 lg:mx-[20%] text-center">
        <motion.p className="text-3xl md:text-5xl mb-4 tracking-wide md:w-fit text-center">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            Hi!
          </motion.span>{" "}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            I&apos;m <b>Ericson Castasus</b>
          </motion.span>
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-fit md:text-xl"
        >
          I&apos;m a{" "}
          <div className="relative inline-block">
            <motion.span
              className="absolute inset-0 bg-blue-300 dark:bg-blue-500 rounded-sm z-0"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{
                delay: 1,
                duration: 0.6,
                ease: "easeOut",
              }}
              style={{ transformOrigin: "left" }}
            />
            <span className="px-1 font-medium relative z-10 text-black dark:text-white">
              full-stack developer
            </span>
          </div>
          with a passion for building web applications that solves real-life
          problems. I love exploring technologies and continuously improving my
          craft.{" "}
        </motion.div>
      </div>
    </>
  );
}
