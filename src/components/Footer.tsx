import React from "react";
import { Clock10, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className=" ">
        <div className="  w-full grid grid-cols-2 justify-items-center py-6  ">
          <img
            src="/hospital/hospitallogo.png"
            alt="img"
            className="h-28 w-28"
          />

          <img src="/hospital/nabhlogo.png" alt="img" />
        </div>
        <div className="bg-pattern3 bg-contain bg-sky-200 grid grid-flow-col justify-evenly py-6  md:max-w-full md:min-h-80 ">
          {/* <div className=" grid grid-flow-row max-w-72 max-h-64 space-y-2  p-2">
          <img src="/hospital/slide-logo.png" alt="img"/>
          <p className="text-xs text-slate-300 font-light">
            <strong>Mission:-</strong>
            To create an organization devoted to develop a state-of-the-art Health Care System which would be comparable to the best in the country.
          </p>
          <p className="text-xs text-slate-300 font-light">
            <strong>Vision:-</strong>
            To create a chain of hospitals, specialized clinics and diagnostic centers for health care delivery to the fullest satisfaction of the users and stake-holders.
          </p>

          
        </div> */}
          <div className="grid grid-flow-row max-w-56 max-h-56  p-2 text-sky-700  ">
            <h1 className=" font-medium border-b-2 ">Important Links</h1>
            <Link href="">
              <div className=" text-xs font-light grid grid-flow-row gap-y-4 my-6 ">
                <p>+ ORTHOPEDICS</p>
                <p>+NEUROSURGERY</p>
                <p>+NEPHROLOGY & DIALYSIS</p>
                <p>+CARDIOLOGY</p>
                <p>+ PHYSIOTHERAPY</p>
                <p>+ EMERGENCY SERVICES</p>
              </div>
            </Link>
          </div>

          <div className="grid grid-flow-row max-w-64 min-h-44  p-2 text-sky-700  ">
            <h1 className=" font-medium border-b-2 ">Contact Us</h1>
            <Link href="">
              <div className="text-xs font-light text-sky-700 grid grid-flow-row gap-y-4 my-6 ">
                <div className="grid grid-flow-col">
                  <MapPin size={28} color="black" strokeWidth={0.5} />
                  <div className="grid px-2">
                    <p>
                      Rani Hospital Managed by Dukhharan Memorial Charitable
                      Trust
                    </p>
                    <p>
                      Behind Machali Ghar Booty Road, Ranchi- 834001,Jharkhand,
                      INDIA
                    </p>
                  </div>
                </div>
                <div className="grid grid-flow-col">
                  <Phone size={28} color="black" strokeWidth={0.5} />
                  <div className="grid px-2">
                    <span>
                      <strong>Phone :-</strong> +91-7677111010
                    </span>
                    <span>
                      <strong>Tele-phone :-</strong> 0651-2360430,0651-2360435,
                      18002574010
                    </span>
                  </div>
                </div>
                <div className="grid grid-flow-col ">
                  <Mail size={28} color="black" strokeWidth={0.5} />
                  <p className="grid -ml-16"><strong>Email:-</strong>info@ranihospital.com</p>
                </div>
                <div className="grid grid-flow-col">
                  <Clock10 size={28} color="black" strokeWidth={0.5} />
                  <p className="grid px-2">
                    Monday - Friday: 9:30 AM to 6:30 PM
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <Link
          href=""
          className="bg-sky-700 text-black text-sm min-h-6 grid grid-flow-col  justify-center place-items-center gap-x-20 "
        >
          <p className="hover:border-b-2">Privacy Policy</p>

          <p className="hover:border-b-2">©Rani Hospital All right reserved</p>
        </Link>
      </div>
    </>
  );
};

export default Footer;
