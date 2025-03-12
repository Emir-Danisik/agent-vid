"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Badge } from "@/components/ui/badge";
import { useState } from 'react';

export default function Home() {
  const [videoError, setVideoError] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="relative">
        {/* Built by CRE Task Wizard link - positioned above the video and centered */}
        <div className="absolute top-[-75px] left-1/2 transform -translate-x-1/2 z-20 mb-6">
          <Link href="https://cretaskwizard.com" target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-90">
            <Badge variant="outline" className="text-sm py-1.5 px-3 flex items-center gap-2 bg-background/80 backdrop-blur-sm border-muted cursor-pointer">
              <Image src="/tw.png" alt="Task Wizard Logo" width={20} height={20} className="rounded-sm" />
              <span className="font-medium">Built by CRE Task Wizard</span>
            </Badge>
          </Link>
        </div>
        
        {/* Video with hue/glow effect */}
        <div className="absolute inset-0 bg-blue-500 opacity-30 blur-xl rounded-lg transform scale-110 z-0"></div>
        <video 
          className="relative z-10 rounded-lg max-w-4xl w-full shadow-lg mt-8"
          controls
          autoPlay
          loop
          muted
        >
          <source src="/vid.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}
