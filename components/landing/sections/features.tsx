"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  FileText, 
  Table, 
  Map 
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FadeInWhenVisible } from "../FadeInWhenVisible";

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <div className="text-center mb-32">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Features
        </h2>
        <h2 className="text-3xl md:text-5xl text-center font-bold mb-4">
          Your Shortcut to Success
        </h2>
        <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
          Our AI-powered platform offers unique features designed specifically for commercial real estate professionals
        </h3>
      </div>

      {/* First use case */}
      <div className="flex flex-col md:flex-row items-center gap-16 mb-32">
        <div className="md:w-1/2">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Upload <span className="text-primary">Your Firm&apos;s Templates</span> 🏢
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Simply upload your firm&apos;s existing OM templates and our app will use your 
              company&apos;s branding to create professionally designed offering memorandums 
              that maintain your brand identity while saving you hours of work.
            </p>
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="mt-4" variant="outline" size="lg" asChild>
                <Link href="https://buy.stripe.com/4gweXf3G099P4yA007" target="_blank">
                  Try it yourself <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </FadeInWhenVisible>
        </div>
        <div className="md:w-1/2">
          <FadeInWhenVisible delay={0.2}>
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full rounded-lg"
              >
                <source src="/temps.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"
                animate={{ 
                  opacity: [0.6, 0.4, 0.6],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>

      {/* Second use case */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-16 mb-32">
        <div className="md:w-1/2">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              From <span className="text-primary">Raw Data</span> to <span className="text-primary">Deal-Winning</span> OMs
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              Upload your Excel spreadsheets, PDFs, and images, and our AI will 
              automatically generate professional tables and content for your offering 
              memorandums. No manual formatting required - just upload and let the AI do the work.
            </p>
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="mt-4" variant="outline" size="lg" asChild>
                <Link href="https://buy.stripe.com/4gweXf3G099P4yA007" target="_blank">
                  Create your OM <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </FadeInWhenVisible>
        </div>
        <div className="md:w-1/2">
          <FadeInWhenVisible delay={0.2}>
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full rounded-lg"
              >
                <source src="/ext.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"
                animate={{ 
                  opacity: [0.6, 0.4, 0.6],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </FadeInWhenVisible>
        </div>
      </div>

      {/* Third use case */}
      <div className="flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <FadeInWhenVisible>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="text-primary">95% Done</span> - Just Review and Refine
            </h2>
            <p className="text-xl text-muted-foreground mb-6">
              We get you 90% of the way there - all that&apos;s left is a quick review. 
              Open your OM directly in Canva to easily edit any element with just a few clicks,
              making last-minute adjustments a breeze.
            </p>
            <motion.div 
              className="inline-block"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button className="mt-4" variant="outline" size="lg" asChild>
                <Link href="https://buy.stripe.com/4gweXf3G099P4yA007" target="_blank">
                  Try it now <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
          </FadeInWhenVisible>
        </div>
        <div className="md:w-1/2">
          <FadeInWhenVisible delay={0.2}>
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full rounded-lg"
              >
                <source src="/canva.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"
                animate={{ 
                  opacity: [0.6, 0.4, 0.6],
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </FadeInWhenVisible>
        </div>
        {/* <div className="md:w-1/2">
          <FadeInWhenVisible delay={0.2}>
            <motion.div 
              className="relative rounded-xl overflow-hidden shadow-2xl bg-muted p-10"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative">
                <div className="absolute top-0 left-0 w-full h-2 bg-primary/20 rounded-t-lg" />
                <div className="h-4 w-16 bg-primary/20 rounded-full mb-6" />
                <div className="space-y-3">
                  <div className="h-3 w-full bg-primary/10 rounded-full" />
                  <div className="h-3 w-5/6 bg-primary/10 rounded-full" />
                  <div className="h-3 w-4/6 bg-primary/10 rounded-full" />
                  <div className="h-10 w-full" />
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-24 bg-primary/10 rounded-lg" />
                    <div className="h-24 bg-primary/10 rounded-lg" />
                    <div className="h-24 bg-primary/10 rounded-lg" />
                  </div>
                  <div className="h-10 w-full" />
                  <div className="h-3 w-full bg-primary/10 rounded-full" />
                  <div className="h-3 w-5/6 bg-primary/10 rounded-full" />
                  <div className="h-3 w-4/6 bg-primary/10 rounded-full" />
                </div>
              </div>
            </motion.div>
          </FadeInWhenVisible>
        </div> */}
      </div>
    </section>
  );
};
