import React from "react";
import { Clock10Icon, MapPin, Search } from "lucide-react";
import { SlSocialFacebook } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { NavbarDemo } from "./Navbar";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

//   import Navbar from "@/components/Navbar";

const Header = () => {
  return (
    <>
    {/* Nav Menu Centered on Large Screens */}
    
      <header className="flex top-0 h-10 flex-col md:flex-row justify-between px-4 bg-sky-700 text-slate-100 font-medium text-sm md:text-base lg:gap-6">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-2 text-sm">
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
          <a href="https://www.facebook.com/sjhrc.in" aria-label="Facebook">
            <BsTwitter
              strokeWidth={1.5}
              className="text-muted-foreground transition-colors text-white hover:text-sky-300  "
            />
          </a>
          <a href="https://x.com/Sjhrcranchi" aria-label="Twitter">
            <FaInstagram
              strokeWidth={1.5}
              className="text-muted-foreground transition-colors text-white hover:text-sky-300"
            />
          </a>
          <a
            href="https://www.instagram.com/shreejagannathhospital/"
            aria-label="Instagram"
          >
            <FaYoutube
              strokeWidth={1.5}
              className="text-muted-foreground transition-colors text-white hover:text-sky-300"
            />
          </a>
          <a
            href="https://www.youtube.com/@sjhrcjagannath9636"
            aria-label="YouTube"
          >
            <BiLogoInstagramAlt
              strokeWidth={1.5}
              className="text-muted-foreground transition-colors text-white hover:text-sky-300"
            />
          </a>
        </span>
      </header>
    
      <div className="flex flex-col md:flex-row w-full justify-around items-center mx-auto p-4 space-y-4 md:space-y-0 shadow-lg border border-black border-opacity-20">
{/* logo */}
<div className="flex justify-center md:justify-start">
<img
  src="/Logo/hmsLogo.png"
  alt="Hospital Logo"
  className="h-20 md:h-32 lg:h-44 w-auto"
/>
</div>

{/* title of hospital */}
<div className="flex flex-col justify-center text-center md:text-left space-y-2">
<h1 className="text-black text-center text-2xl md:text-3xl lg:text-4xl font-sans font-semibold">
  रानी अस्पताल
</h1>
<h1 className="text-black text-2xl text-center md:text-3xl lg:text-4xl font-sans font-semibold">
  Rani Hospital
</h1>
<span className="font-medium text-sm text-center md:text-lg lg:text-xl text-sky-700">
  Managed by Dukhharan Memorial Charitable Trust
</span>
<div className="flex justify-center text-center md:justify-start items-center text-sky-700 space-x-2">
  <MapPin color="#0e61cd" strokeWidth={1} />
  <span className="text-xs md:text-sm text-center lg:text-base">
    Behind Machali Ghar Booty Road, Ranchi- 834001, Jharkhand, INDIA
  </span>
</div>
<p className="text-red-700 text-sm text-center md:text-base lg:text-lg animate-pulse">
  Emergency No.(24x7) : 7677111010
</p>
</div>

{/* information */}
<div className="flex flex-col justify-center items-center md:items-end space-y-2 text-slate-700">
<a href="#" className="hover:border-b-2 border-transparent">
  OPD Appointment
</a>
<a href="#" className="hover:border-b-2 border-transparent">
  Rani Dashboard
</a>
</div>
</div>


  <header className="">
    {/* Nav Menu Centered on Large Screens */}
    <NavbarDemo/>

  </header>
</>
  );
};

export default Header;
