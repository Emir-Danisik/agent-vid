"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import Image from "next/image";
import { FadeInWhenVisible } from "../FadeInWhenVisible";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-8 mx-auto py-20 md:py-32">
        <FadeInWhenVisible>
          <div className="text-center space-y-8">
            <div className="flex items-center justify-center gap-3">
              <Link href="https://cretaskwizard.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-90">
                <Badge variant="outline" className="text-sm py-1.5 px-3 flex items-center gap-2 bg-background/80 backdrop-blur-sm border-muted cursor-pointer">
                  <Image src="/tw.png" alt="Task Wizard Logo" width={20} height={20} className="rounded-sm" />
                  <span className="font-medium">Built by CRE Task Wizard</span>
                </Badge>
              </Link>

              <Badge variant="outline" className="text-sm py-2">
                <span className="mr-2 text-primary">
                  <Badge>New</Badge>
                </span>
                <span> AI-Powered CRE Tools </span>
              </Badge>
            </div>

            <div className="max-w-screen-md mx-auto text-center text-4xl md:text-6xl font-bold">
              <h1>
                Generate Professional
                <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                  Offering Memorandums
                </span>
                in Minutes
              </h1>
            </div>

            <p className="max-w-screen-sm mx-auto text-xl text-muted-foreground">
              {`Create stunning offering memorandums in just 15 minutes. Our AI-powered platform makes OM creation 5X faster, turning hours of work into minutes without compromising quality.`}
            </p>

            <div className="space-y-4 md:space-y-0 md:space-x-4">
              <Button asChild className="w-5/6 md:w-1/4 font-bold group/arrow">
                <Link href="#features">
                  Create Your First OM
                  <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
                </Link>
              </Button>

              <Button
                asChild
                variant="secondary"
                className="w-5/6 md:w-1/4 font-bold"
              >
                <Link href="#pricing">View Pricing</Link>
              </Button>
            </div>
            
            
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="relative group mt-14">
            <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-full md:w-[1200px] mx-auto rounded-lg relative leading-none border border-t-2 border-secondary border-t-primary/30"
            >
              <source src="/vids.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
};
