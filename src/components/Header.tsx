import React from "react";
import { Clock10Icon, MapPin, Search } from "lucide-react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { Navbar } from "./Navbar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import Link from "next/link";
import NavMobile from "./NavMobile";

//   import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <section>
      {/* Nav Menu Centered on Large Screens */}

      <header className="flex top-0  flex-col md:flex-row justify-between px-4 bg-sky-700 text-slate-100 font-medium text-sm md:text-base lg:gap-6">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-2 text-sm">
          <NavMobile/>
          <span className="flex items-center ">
            {" "}
            <Clock10Icon
              color="#0e61cd"
              strokeWidth={1}
              className="mr-2 "
            />{" "}
            Mon - Fri: 9:30 AM to 6:30 PM
          </span>
        </div>
        {/* Contact & Social Info */}
        <span className="flex items-center md:justify-end gap-4 mt-4 md:mt-0 mr-4">
          <Link href="/" aria-label="Facebook">
            <BsTwitter
              strokeWidth={1.5}
              className="text-muted-foreground transition-colors text-sky-400 hover:text-sky-300  "
            />
          </Link>
          <Link href="/" aria-label="Twitter">
            <FaInstagram
              strokeWidth={1.5}
              className="text-muted-foreground transition-colors text-rose-600 hover:text-sky-300"
            />
          </Link>
          <Link href="/" aria-label="Instagram">
            <FaYoutube
              strokeWidth={1.5}
              className="text-muted-foreground transition-colors text-red-500 hover:text-sky-300"
            />
          </Link>
          <Link href="/" aria-label="YouTube">
            <FaFacebookF
              strokeWidth={1.5}
              className="text-muted-foreground transition-colors text-white hover:text-sky-300"
            />
          </Link>
        </span>
      </header>

      <div className=" bg-building bg-cover bg-bottom relative w-full  h-44 sm:h-48 mx-auto p-4 shadow-lg border border-black border-opacity-20">
        {/* Background with opacity */}
        <div className="absolute inset-0 bg-sky-100 bg-opacity-50 z-0"></div>

        <div className=" relative z-10 flex flex-col md:flex-row justify-evenly items-center  md:space-y-0">
          {/* logo */}
          {/* logo */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/Logo/hmsLogo.png"
              alt="Hospital Logo"
              className="h-28 md:h-28 lg:h-32 w-auto"
            />
          </div>

          {/* title of hospital */}
          <div className="grid grid-flow-row justify-center text-center md:text-left space-y-1 ">
            <h1 className="text-slate-800 text-center text-2xl md:text-3xl lg:text-5xl font-sans font-semibold">
              रानी अस्पताल
            </h1>
            <h1 className="text-slate-800  text-2xl text-center md:text-3xl lg:text-5xl font-sans font-semibold">
              Rani Hospital
            </h1>
            <span className="font-medium text-sm text-center md:text-lg lg:text-xl text-black">
              Managed by Dukhharan Memorial Charitable Trust
            </span>
            <div className="flex justify-center text-center md:justify-start items-center text-black space-x-2">
              <MapPin color="#0e61cd" strokeWidth={1} />
              <span className="text-xs md:text-sm text-center lg:text-base">
                Behind Machali Ghar Booty Road, Ranchi- 834001, Jharkhand, INDIA
              </span>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col  items-center md:items-end space-y-2 text-slate-800 font-medium">
            <a href="#" className="hover:border-b-2 hover:text-sky-700 ">
              OPD Appointment
            </a>
            <a href="#" className="hover:border-b-2 hover:text-sky-700 ">
              Rani Dashboard
            </a>
          </div>
        </div>
      </div>

      <header className="hidden md:block">
        {/* Nav Menu Centered on Large Screens */}
        <Navbar />
      </header>
    </section>
  );
};

export default Header;
