import { Button } from "@/components/ui/button";
import { ArrowLeft, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";
import GitHubIcon from "../components/GitHubIcon";
import Features from "../sections/wise-notes-sections/features";

export default function Page() {
  return (
    <>
      <div className="flex items-center space-x-4 px-[5%] lg:px-[25%] mt-12">
        <Link
          className={
            "transition hover:border-b-1 hover:border-b-black flex gap-2 w-fit h-7"
          }
          href={"/"}
        >
          <ArrowLeft /> Ericson&apos;s Portfolio
        </Link>
      </div>
      <div className="px-[5%] lg:px-[18%] py-12">
        <div className="flex flex-col gap-8 text-center items-center justify-center h-[700px]">
          <p className="font-bold text-4xl">WISE NOTES</p>
          <p className="lg:w-[75%] text-md md:text-lg text-balance">
            Wise notes is a web based note application that has RAG
            (Retrieval-Augmented Generation) integration. It is made with
            <span className="font-bold"> Typescript React</span> in front-end
            and <span className="font-bold">NodeJS, Express,</span> and{" "}
            <span className="font-bold">MongoDB</span> in the back-end. It has a
            feature where the user can query the integrated model about their
            notes. It can synthesize and summarize notes according to
            users&apos; needs. This application implements this basic idea, as
            it expands and improve, this system can be used as a research tool,
            a knowledge base for organizations, and as a database for expert
            systems.
          </p>
          <div className="flex gap-2 mt-8">
            <Button asChild>
              <Link href={"https://wise-notes-v2-8ppi.vercel.app/"}>
                Live demo <SquareArrowOutUpRight />
              </Link>
            </Button>

            <Button variant={"outline"} asChild>
              <Link href={"https://github.com/erxon/wise-notes-v2"}>
                {" "}
                GitHub <GitHubIcon reverse />
              </Link>
            </Button>
          </div>
        </div>
        <Features />
      </div>
    </>
  );
}
