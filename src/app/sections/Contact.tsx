"use client";

import { Button } from "@/components/ui/button";
import FacebookIcon from "../components/FacebookIcon";
import InstagramIcon from "../components/InstagramIcon";

import LinkedInIcon from "../components/LinkedInIcon";
import { MailIcon, PhoneIcon } from "lucide-react";
import GitHubIcon from "../components/GitHubIcon";

export default function Contact() {
  return (
    <div className="py-12 p-6 md:px-12 lg:px-[20%]">
      <p className="font-bold text-2xl mb-8">GET IN TOUCH</p>
      <div>
        <div className="flex gap-2 items-center">
          <MailIcon className="w-4 h-4" />
          <p>ericsoncastasus@outlook.com</p>
        </div>

        <div className="flex gap-2 items-center">
          <PhoneIcon className="w-4 h-4" />
          <p className="text-sm">+63 962 944 8634</p>
        </div>
        <div className="flex flex-row gap-2 my-2">
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => {
              window.open("https://web.facebook.com/ericson.castasus/");
            }}
          >
            <FacebookIcon />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => {
              window.open("https://www.instagram.com/ericson.castasus/");
            }}
          >
            <InstagramIcon />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => {
              window.open("https://www.linkedin.com/in/ericson-castasus/");
            }}
          >
            <LinkedInIcon />
          </Button>
          <Button
            variant={"ghost"}
            size={"icon"}
            onClick={() => window.open("https://github.com/erxon")}
          >
            <GitHubIcon reverse />
          </Button>
        </div>
      </div>
    </div>
  );
}
