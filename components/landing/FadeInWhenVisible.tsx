"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface FadeInWhenVisibleProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}

export function FadeInWhenVisible({ 
  children, 
  delay = 0, 
  y = 30, 
  className = "" 
}: FadeInWhenVisibleProps) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
} 