"use client";
import React, { useState, useEffect } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { Search } from "lucide-react";

export function Navbar() {
  return (
    <div className="relative w-full flex flex-col items-center">
      <NavbarFunc className="top-0 w-full" />
    </div>
  );
}

function NavbarFunc({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div
      className={cn(
        " top-0 inset-x-0 z-50 transition-transform transform  ",
        className
      )}
    >
      <Menu setActive={setActive}>
        <Link href="/" className="text-white text-sm hover:text-slate-200">
          HOME
        </Link>
        <Link href="/About" className="text-white text-sm hover:text-slate-200">
          ABOUT US
        </Link>

        <MenuItem setActive={setActive} active={active} item="DEPARTMENTS">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Department/speciality">
              Specialtiy Centre{""}
            </HoveredLink>
            <HoveredLink href="/Department/department">Departments</HoveredLink>
            <HoveredLink href="/Department/superspeciality">
              Superspeciality{" "}
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="APPOINTMENTS">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Appointments/BookAppointment">
              {" "}
              OPD Appointment Booking
            </HoveredLink>
            <HoveredLink href="/Appointments/BookTelecommunicationAppointments">
              Book Telecommunication Appointment
            </HoveredLink>
            <HoveredLink href="/Appointments/VideoConferencing">
              Video Conferencing
            </HoveredLink>
            <HoveredLink href="/Appointments/BookingList">
              Booked List
            </HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="EVENTS">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Events/ConferenceWorkshops">
              Conference & workshops
            </HoveredLink>
            <HoveredLink href="/Events/CurrentEvent">Current Event</HoveredLink>
            <HoveredLink href="/Events/InstituteDay">Institute day</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="NOTICES">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/Notices/Notice">Notice</HoveredLink>
            <HoveredLink href="/Notices/Recruitments">Recruitment</HoveredLink>
          </div>
        </MenuItem>

        <Link
          href="/AcademicsSection"
          className="text-white text-sm hover:text-slate-200"
        >
          ACADEMICS
        </Link>

        <div className="grid relative w-48 bottom-2 max-w-sm h-0 ">
          <Input type="text" placeholder="Search..." className="absolute " />
          <Button
            type="submit"
            className="bg-primary-foreground justify-self-end "
          >
            <Search size={20} color="#086fdd " />
          </Button>
        </div>
      </Menu>
    </div>
  );
}
