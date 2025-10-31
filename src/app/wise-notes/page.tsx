import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MailIcon,
  PhoneIcon,
  SquareArrowOutUpRight,
} from "lucide-react";
import Link from "next/link";
import GitHubIcon from "../components/GitHubIcon";
import Features from "../sections/wise-notes-sections/Features";
import Footer from "../sections/Footer";
import { ModeToggle } from "@/components/ui/theme-mode-toggle";

export default function Page() {
  return (
    <>
      <div className="px-[5%] lg:px-[18%] pt-12">
        <div className="flex justify-between items-center mx-auto bg-white dark:bg-gray-900 p-4 rounded-lg shadow-lg">
          <Link
            className={
              "transition hover:border-b-1 hover:border-b-black flex gap-2 w-fit h-7"
            }
            href={"/"}
          >
            <ArrowLeft /> Ericson&apos;s Portfolio
          </Link>
          <ModeToggle />
        </div>
        <div className="flex flex-col gap-8 text-center items-center justify-center h-[calc(100vh-175px)] mb-10">
          <p className="font-bold text-4xl">WISE NOTES</p>
          <p className="md:w-[75%] text-md md:text-lg text-balance tracking-wide">
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
      <WiseNotesFooter />
    </>
  );
}

function WiseNotesFooter() {
  return (
    <div className="flex flex-col gap-4 bg-gray-300 dark:bg-gray-900 mt-12">
      <div className="p-2 md:p-4 py-20 flex flex-col items-center gap-12">
        <div className="text-center flex flex-col gap-2 items-center">
          <p className="text-2xl font-bold tracking-wider">
            CHECK THE LIVE DEMO
          </p>
          <div className="flex gap-2">
            <Button asChild size={"lg"}>
              <Link href={"https://wise-notes-v2-8ppi.vercel.app/"}>
                Wise Notes <SquareArrowOutUpRight />
              </Link>
            </Button>
            <Button asChild size={"lg"} variant={"outline"}>
              <Link href={"https://github.com/erxon/wise-notes-v2"}>
                GitHub <GitHubIcon reverse />
              </Link>
            </Button>
          </div>
        </div>
        <div className="text-center w-fit p-4">
          <p className="text-lg font-semibold mb-2">
            For questions, you can reach me at
          </p>
          <div className="flex flex-col md:flex-row gap-2 justify-center items-center">
            <div className="flex gap-2">
              <MailIcon />
              <p className="">ericsoncastasus@outlook.com</p>
            </div>
            <div className="flex gap-2">
              <PhoneIcon />
              <p>+63 962 944 8634</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
