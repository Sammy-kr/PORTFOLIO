"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ReactNode } from "react";
import { Grid } from "lucide-react";
import Hero from "../../components/hero";

interface NavItem {
  name: string;
  link: string;
  icon?: ReactNode;
}

interface FloatingNavProps {
  navItems: NavItem[];
}

export const FloatingNav = ({ navItems }: FloatingNavProps) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-4 left-1/2 -translate-x-1/2 z-50"
        )}
      >
        <div className="flex items-center justify-center space-x-4 bg-white/80 dark:bg-black/80 backdrop-blur-md rounded-full px-4 py-2 shadow-lg">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className={cn(
                "flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors"
              )}
            >
              {item.icon && <span className="w-4 h-4">{item.icon}</span>}
              <span>{item.name}</span>
            </Link>
          ))}
          <Link href="/" className="flex items-center space-x-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white transition-colors">
            <Grid className="w-4 h-4" />
            <span>Grid</span>
          </Link>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
