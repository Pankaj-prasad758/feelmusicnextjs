'use client';
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {
     const [active, setActive] = useState<string | null>(null);
  return (
    <div
     className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
       <Menu setActive={setActive}>
        <Link href={"/"}>
        <MenuItem setActive={setActive} active={active} item="Home">
         Hello
        </MenuItem>
        </Link>
        <Link href={"/courses"}>
        <MenuItem setActive={setActive} active={active} item="courses">
         <div className="flex flex-col text-sm space-y-4">
             <HoveredLink href="/courses">Courses</HoveredLink>
             <HoveredLink href="/courses">Basic course</HoveredLink>
             <HoveredLink href="/courses">Traditional course</HoveredLink>
             <HoveredLink href="/courses">Modern course</HoveredLink>
             <HoveredLink href="/courses">Vintage course</HoveredLink>
         </div>
        </MenuItem>
        </Link>
        <Link href={"/contact"}>
        <MenuItem setActive={setActive} active={active} item="Contact us"></MenuItem>
        </Link>
       </Menu>
        </div>
  )
}

export default Navbar