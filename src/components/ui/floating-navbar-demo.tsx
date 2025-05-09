"use client";
import React from "react";
import { FloatingNav } from "./floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";

export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Features",
      link: "#features",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Benefits",
      link: "#benefits",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Modules",
      link: "#modules",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}