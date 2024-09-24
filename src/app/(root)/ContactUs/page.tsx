import React from "react";

import { Globe, Mail, Smartphone } from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";
import Title from "@/components/Title";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactMap = () => {
  return (
    <section className="section p-4">
      {/* Title Section */}
      <Title title="Contact Us" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Info */}
        <div className="grid gap-4">
          {/* Telephone Card */}
          <div className="flex items-center gap-4 p-4 bg-sky-50 shadow-md rounded-md">
            <Smartphone size={48} color="#0284c7" strokeWidth={1} />
            <div>
              <p className="text-lg font-medium">
                <strong>Telephone:</strong> 0651-2360430, 0651-2360435,
                18002574010
              </p>
              <p className="text-lg">
                <strong>Phone:</strong> +91-7677111010
              </p>
            </div>
          </div>

          {/* Social Media Links Card */}
          <div className="flex items-center gap-4 p-4 bg-sky-50 shadow-md rounded-md">
            <Globe size={48} color="#0284c7" strokeWidth={1} />
            <div>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/sjhrc.in" aria-label="Facebook">
                  <BsTwitter className="text-muted-foreground size-8 hover:text-sky-400" />
                </a>
                <a href="https://x.com/Sjhrcranchi" aria-label="Twitter">
                  <FaInstagram className="text-muted-foreground size-8 hover:text-rose-600" />
                </a>
                <a href="https://www.instagram.com/shreejagannathhospital/" aria-label="Instagram">
                  <FaFacebookF className="text-muted-foreground size-8 hover:text-blue-700" />
                </a>
                <a href="https://www.youtube.com/@sjhrcjagannath9636" aria-label="YouTube">
                  <FaYoutube className="text-muted-foreground size-8 hover:text-red-500" />
                </a>
              </div>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex items-center gap-4 p-4 bg-sky-50 shadow-md rounded-md">
            <Mail size={48} color="#0284c7" strokeWidth={1} />
            <div>
              <p className="text-lg">
                <strong>Email:</strong> info@ranihospital.com
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="p-4 bg-sky-50 shadow-md rounded-md">
          <h1 className="text-2xl text-sky-700 py-4 font-medium">Leave Us a Message</h1>

          <div className="grid gap-4">
            <Input
              type="text"
              placeholder="Your Name"
              className="bg-white rounded-sm h-12 text-lg px-4 w-full"
            />
            <Input
              type="text"
              placeholder="Your Phone"
              className="bg-white rounded-sm h-12 text-lg px-4 w-full"
            />
            <Input
              type="email"
              placeholder="Email Address"
              className="bg-white rounded-sm h-12 text-lg px-4 w-full"
            />
          </div>

          <Textarea
            placeholder="Type your message here."
            className="bg-white text-lg shadow-sm rounded-sm mt-4 w-full h-32 px-4"
          />
          <Button type="submit" className="mt-4 w-full lg:w-auto">
            Send
          </Button>
        </div>
      </div>

      {/* Map Section */}
      <div className="mt-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1613.084419072957!2d85.3211006131735!3d23.38254792740877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e11843d380af%3A0x39715bc46113cea3!2sRani%20Hospital!5e0!3m2!1sen!2sin!4v1725520827984!5m2!1sen!2sin"
          width="100%"
          height="400"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-md shadow-lg"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactMap;
