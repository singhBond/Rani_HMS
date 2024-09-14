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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


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
    title: " ABOUT",
    href: "/About",
    
  },
  {
    title: "DEPARTMENTS",
    href: "/services",
    submenu: [
      { title:"Speciality Centre", href: "#" },
      { title: "Departments", href: "#" },
      { title: "Superspeciality", href: "#" },
      
    ],
  },
  {
    title: "APPOINTMENTS",
    href: "#",
    submenu: [
      { title:"Our Speciality", href: "/speciality/ourSpeciality" },
      { title: "Key Performance", href: "/speciality/keyPerformance" },
      
    ],
  },
  {
    title: "DEPARTMENTS",
    href: "#",
    submenu: [
      { title:"OPD Schedule", href: "/opd" },
      { title: "Department Detail", href: "/departmentDetail" },
      
    ],
  },
  {
    title: "COURSES",
    href: "#",
  },
  {
    title: "CAREER",
    href: "/career/currentOpenings",
  },
  {
    title: "BLOG",
    href: "/blogDash/blog",
  },
  {
    title: "CONTACT",
    href: "/contact",
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
        <header className="flex h-14 items-center justify-between gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          {/* Sheet for Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="shrink-0 md:hidden"
              >
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="flex flex-col w-1/2">
              <div className="grid gap-4 text-base font-medium text-muted-foreground">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-lg font-bold text-foreground"
                >
                  <Hospital  className="w-5 h-5  " />
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
          <div >
          <Dialog>
            <DialogTrigger asChild className="">
              <Button variant="hms" className="transition ease-in-out delay-100 hover:translate-4 hover:scale-110 duration-400 group block" >Appointment</Button>
            </DialogTrigger>
            <DialogContent className=" bg-slate-100  ">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>

              
            </DialogContent>
          </Dialog>
        </div>
          {/* User Account Dropdown */}
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
        </header>
      </div>
    </>
  );
};

export default NavMobile;
