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

      <header className="">
        <div className="flex top-0  flex-col md:flex-row justify-between px-4 bg-primary text-slate-100 font-medium text-sm md:text-base lg:gap-6">
          <div className="flex items-center gap-6  ">
            {" "}
            <p>7677111010</p>
            <p>Email:info@ranihospital.com</p>
          </div>

          {/* Contact & Social Info */}
          <span className="flex items-center md:justify-center gap-4 my-2 md:mt-0 mr-4">
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
        </div>
        <div className="grid justify-end bg-gradient-to-l   from-teal-500 to-transparent ">
          <div className=" flex gap-4 px-4   lg:text-white sm:text-black ">
            <NavMobile />
            <Link className="hover:underline " href={"/"}>
              Find a Doctor
            </Link>
            <Link className="hover:underline " href={"/blogDash/blog"}>
              Blogs
            </Link>

            <Link className="hover:underline " href={"/Career"}>
              Career
            </Link>
            <Link className="hover:underline " href={"/"}>
              Services
            </Link>
            <Link className="hover:underline " href={"/ContactUs"}>
              Contact Us
            </Link>
          </div>
        </div>
      </header>

      <div className=" bg-building bg-cover bg-bottom relative w-full  h-48 sm:h-48 mx-auto p-4 shadow-lg border border-black border-opacity-20">
        {/* Background with opacity */}
        <div className="absolute inset-0 bg-sky-100 bg-opacity-50 z-0"></div>

        <div className=" relative z-10 flex flex-col sm:flex-row justify-evenly items-center  md:space-y-0">
          {/* logo */}

          <div className=" justify-center md:justify-start md:block hidden">
            <img
              src="/Logo/hmsLogo.png"
              alt="Hospital Logo"
              className="sm:h-10 md:h-28 lg:h-32  w-auto"
            />
          </div>

          {/* title of hospital */}

          <div className="grid grid-rows-1 justify-center text-center md:text-left  ">
            <div className="flex justify-center">
              <img
                src="/Logo/hmsLogo.png"
                alt="Hospital Logo"
                className="h-16 md:hidden"
              />
              <div className="grid grid-rows-1 justify-center text-center md:text-left ">
                <h1 className="text-slate-800 text-center text-2xl sm:text-lg lg:text-5xl font-sans font-semibold">
                  रानी अस्पताल
                </h1>
                <h1 className="text-slate-800  text-2xl text-center sm:text-xl lg:text-5xl font-sans font-semibold">
                  Rani Hospital
                </h1>
              </div>
            </div>
            <div className="font-medium text-sm text-center sm:text-lg lg:text-xl text-black">
              Managed by Dukhharan Memorial Charitable Trust
            </div>
            <div className="flex justify-center text-center md:justify-start items-center text-black space-x-2">
              <MapPin color="#0e61cd" strokeWidth={1} />
              <div className="text-xs md:text-sm text-center lg:text-base">
                Behind Machali Ghar Booty Road, Ranchi- 834001, Jharkhand, INDIA
              </div>
            </div>
          </div>

          {/* Information */}
          <div className="flex flex-col  items-center md:items-end space-y-2 text-slate-800 font-medium mb-4">
            <Link
              href="/Appointments/BookAppointment"
              className="hover:border-b-2 hover:text-sky-700 "
            >
              OPD Appointment
            </Link>
            <Link
              href="/RaniLiveDashboard"
              className="hover:border-b-2 hover:text-sky-700 "
            >
              Rani Dashboard
            </Link>
          </div>
        </div>
      </div>

      <header className="hidden md:block">
        {/* Nav Menu Bar */}
        <Navbar />
      </header>
    </section>
  );
};

export default Header;
