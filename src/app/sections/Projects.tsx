"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { motion } from "motion/react";
import { SquareArrowOutUpRight } from "lucide-react";
import GitHubIcon from "../components/GitHubIcon";

function Project({
  themeColor,
  backgroundColorClass,
  projectName,
  description,
  imagesrc,
  technologies,
  liveDemoLink,
  gitHubLink,
}: {
  themeColor: string;
  backgroundColorClass: string;
  projectName: string;
  description: string;
  imagesrc: string;
  technologies: string[];
  liveDemoLink: string;
  gitHubLink: string;
}) {
  return (
    <motion.div className="mx-auto w-full lg:w-250 p-4 lg:relative">
      <motion.div
        className="hidden lg:block"
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "1px",
          backgroundColor: themeColor,
          transformOrigin: "bottom",
        }}
      />
      <motion.div
        initial={{ left: -30, opacity: 0, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        whileInView={{ left: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className={`${backgroundColorClass} w-[200px] lg:w-[400px] h-auto p-4 hidden lg:block lg:relative z-10 shadow-lg lg:top-40`}
      >
        <Image
          src={imagesrc}
          alt="Gather logo"
          width={120}
          height={120}
          className="rounded-lg mx-auto mb-4"
        />
        <p className="text-center text-sm ">{projectName}</p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        whileHover={{ scale: 1.03 }}
        whileInView={{ left: 0, opacity: 0.75 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
        className="lg:hidden relative z-10 opacity-75 shadow-lg w-fit bg-white rounded-lg"
      >
        <Image
          src={imagesrc}
          alt="logo"
          width={120}
          height={120}
          className="rounded-lg mx-auto"
        />
      </motion.div>
      <motion.div
        initial={{ top: -40, opacity: 0 }}
        whileInView={{ top: -100, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8, ease: "easeInOut" }}
        className="w-full lg:w-[600px] h-fit md:h-[350px] box-border pt-32 md:pt-12 lg:pl-12 lg:pr-4 px-4 pb-4 bg-white dark:bg-neutral-800 shadow-sm relative md:top-[-100] lg:left-90 flex flex-col justify-center"
      >
        <p className="tracking-wide mb-8 text-sm">{description}</p>
        <div className="flex gap-2 text-xs mb-4 box-border flex-wrap">
          {technologies.map((item) => (
            <p
              className="px-2 py-1 rounded-lg font-medium bg-zinc-700 text-white"
              key={item}
            >
              {item}
            </p>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            delay: 1,
            duration: 0.5,
            ease: "easeOut",
          }}
          style={{
            transformOrigin: "left",
          }}
          className="flex flex-col md:block gap-2"
        >
          <Button
            className="shadow-lg md:mr-2"
            onClick={() => {
              window.open(liveDemoLink);
            }}
          >
            <SquareArrowOutUpRight /> Live demo
          </Button>
          <Button
            className="shadow-lg"
            onClick={() => {
              window.open(gitHubLink);
            }}
          >
            <GitHubIcon /> GitHub
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div className="py-12 px-6 md:px-12 lg:px-[20%] bg-neutral-100 dark:bg-background">
      <p className="text-2xl font-bold mb-8">PROJECTS</p>
      <Project
        key={0}
        themeColor="#00adb4"
        backgroundColorClass="gather-project"
        projectName="Gather: A System To Aid Missing Persons Management with Face Recognition and Map"
        description="Gather is an information system that deals with missing person management. 
        This system is intended for authorities such as Police and Baranggay officials. It uses Face Recognition and Maps.
        Imagga API was used in Face Recognition and Mapbox is used for mapping and routes."
        imagesrc="/projects-logo/gather.png"
        technologies={[
          "JavaScript",
          "ReactJS",
          "NextJS",
          "PusherJS",
          "Imagga",
          "Mapbox",
        ]}
        liveDemoLink="https://gather-plum.vercel.app/home"
        gitHubLink="https://github.com/erxon/gather"
      />
      <Project
        key={1}
        themeColor="#d0d2d6"
        backgroundColorClass="wise-notes-project"
        projectName="Wise Notes: A Notes App That Learns"
        description="Wise Notes is a web-based note application with RAG (Retrieval-Augmented Generation) to learn from the user's notes. 
        It uses LangChain, Groq, and Huggingface API. Users can generate new ideas and knowledges based on their notes."
        imagesrc="/projects-logo/wise-notes.png"
        technologies={[
          "TypeScript",
          "ReactJS",
          "Vite",
          "LangChain",
          "Huggingface",
          "Groq",
        ]}
        liveDemoLink="/wise-notes"
        gitHubLink="https://github.com/erxon/wise-notes-v2.git"
      />
      <Project
        key={2}
        themeColor="#868cb0"
        backgroundColorClass="moments-project"
        projectName="Moments: Photos Worth Sharing"
        description="Moments is a web application where users can create galleries that stores their photos. This gallery is shareable and can be visible to any people they want."
        imagesrc="/projects-logo/moments.png"
        technologies={["TypeScript", "ReactJS", "NextJS", "Supabase"]}
        liveDemoLink="https://moments-delta-seven.vercel.app/"
        gitHubLink="https://github.com/erxon/moments"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="py-4"
      >
        <p className="font-semibold text-lg">Other projects</p>
        <p className="text-sm mb-4 text-neutral-700 dark:text-neutral-300">
          Built for clients
        </p>
        <div className="flex gap-4 items-center border-b-2 mb-4 w-full md:w-1/2 lg:w-1/4">
          <p className="grow-1">Judelu - Landing Page 2023</p>
          <Button
            variant="link"
            size={"sm"}
            onClick={() => {
              window.open("https://judelu-ma2k8cjil-erxons-projects.vercel.app/");
            }}
          >
            <SquareArrowOutUpRight />
            Live
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
