"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Correct hook for Next.js 13+
import {
  ChevronDown,
  ChevronUp,
  HomeIcon,
  Menu,
  CircleUser,
  Hospital,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export interface SubLink {
  title: string;
  href: string;
}

export interface NavLink {
  title: string;
  href: string;
  submenu?: SubLink[];
}

export const navigationLinks: NavLink[] = [
  {
    title: "HOME",
    href: "/",
  },
  {
    title: " ABOUT US",
    href: "/About",
  },
  {
    title: "DEPARTMENT",
    href: "#",
    submenu: [
      { title: "Speciality Centre", href: "/Department/speciality" },
      { title: "Departments", href: "Department/departments" },
      { title: "Superspeciality", href: "Department/superspeciality" },
    ],
  },
  {
    title: "APPOINTMENTS",
    href: "#",
    submenu: [
      { title: "Book Appointment", href: "/Appointments/BookAppointment" },
      {
        title: "Book Telecommunication Appointment",
        href: "/Appointments/BookTelecommunicationAppointments",
      },
      { title: "Video Conferencing", href: "/Appointments/VideoConferencing" },
    ],
  },
  {
    title: "EVENTS",
    href: "#",
    submenu: [
      { title: "Conference Workshops", href: "/Events/ConferenceWorkshops" },
      { title: "Current Event", href: "/Events/CurrentEvent" },
      { title: "Institute Day", href: "/Events/InstituteDay" },
    ],
  },
  {
    title: "NOTICES",
    href: "#",
    submenu: [
      { title: "Notice", href: "/Notices/Notice" },
      { title: "Recruitments", href: "/Notices/Recruitments" },
    ],
  },
  {
    title: "ACADEMICS",
    href: "/Academics/Introduction",
  },
];

const NavMobile: React.FC = () => {
  const [openMenu, setOpenMenu] = useState<string>(""); // State to track which menu is open
  const pathname = usePathname(); // Get the current route pathname

  // Function to toggle submenu
  const toggleSubmenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? "" : menu); // Toggle the open/close of the clicked menu
  };

  // Function to check if a link is active
  const isActive = (href: string): boolean => {
    return pathname === href; // Compare the current path with the link href
  };

  return (
    <>
      {/* Mobile Navigation Container */}
      <div className="flex flex-col md:hidden">
        <header className="flex h-14 items-center justify-between gap-4  px-4 lg:h-[60px] lg:px-6">
          {/* Sheet for Mobile Menu */}
          <Sheet >
            <SheetTrigger asChild>
              <Button
                variant={"hms"}
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col w-1/2 bg-sky-100 ">
              <div className="grid gap-4 text-base font-medium text-muted-foreground">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-bold text-foreground"
                >
                  <Hospital className="w-5 h-5" />
                  <span className="sr-only">Acme Inc</span>
                </Link>

                {navigationLinks.map((link: NavLink) => (
                  <div key={link.title} className="w-full">
                    {/* Check if submenu exists */}
                    {link.submenu ? (
                      <>
                        <div
                          className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 cursor-pointer ${
                            isActive(link.href)
                              ? "bg-muted text-foreground font-semibold"
                              : "hover:text-foreground"
                          }`}
                          onClick={() => toggleSubmenu(link.title)}
                        >
                          <span>{link.title}</span>
                          {openMenu === link.title ? (
                            <ChevronUp className="ml-auto h-4 w-4" />
                          ) : (
                            <ChevronDown className="ml-auto h-4 w-4" />
                          )}
                        </div>
                        {openMenu === link.title && (
                          <div className="ml-6 space-y-2 transition-all">
                            {link.submenu.map((sublink) => (
                              <Link
                                href={sublink.href}
                                key={sublink.title}
                                className={`block text-sm text-muted-foreground hover:text-foreground ${
                                  isActive(sublink.href)
                                    ? "text-foreground font-semibold"
                                    : ""
                                }`}
                              >
                                {sublink.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={link.href}
                        className={`mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 ${
                          isActive(link.href)
                            ? "bg-muted text-foreground font-semibold"
                            : "hover:text-foreground"
                        }`}
                      >
                        {link.title}
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </header>
      </div>
    </>
  );
};

export default NavMobile;
