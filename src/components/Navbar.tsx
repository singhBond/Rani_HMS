"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <Navbar className="top-0 w-full" />
     
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
 



  return (
    <div
      className={cn(
        " top-0 inset-x-0 z-50 transition-transform transform",className)}
    >
      <Menu setActive={setActive} > 
        <HoveredLink href="/">HOME</HoveredLink>

        <MenuItem setActive={setActive} active={active} item="ABOUT US">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Web Development</HoveredLink>
            <HoveredLink href="/interface-design">Interface Design</HoveredLink>
           
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="DEPARTMENTS">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
           
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="APPOINTMENTS">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Specialtiy </HoveredLink>
            <HoveredLink href="/individual">OPD Schedule</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="EVENTS">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
           
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="NOTICE">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="ACADEMICS">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            
          </div>
          
        </MenuItem>
        <HoveredLink href="/hobby">CONTACT US</HoveredLink>
        <MenuItem setActive={setActive} active={active} item="CAREER">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            
          </div> 
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="SERVICES">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            
          </div>
        </MenuItem>


        

        
      </Menu>
    </div>
  );
}
