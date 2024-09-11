import React from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import Title from "./Title";
import { Card } from "./ui/card";
import { Globe, Mail, Smartphone } from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { FaFacebook, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";

const ContactMap = () => {
  return (
    // <section className="p-4">
    //   <Title title={"Contact Us"}></Title>
    //   <div>
    //       <div className="grid grid-cols-3 justify-items-center">
    //       <Card className="bg- sm:min-h-28 sm:min-w-52 grid grid-flow-col justify-center rounded-none shadow-none  ... transition duration-500 transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none border-none hover:border-b-2  hover:border-b-sky-700 hover:bg-white ">
    //         <Smartphone
    //           size={48}
    //           color="#0284c7"
    //           strokeWidth={1}
    //           className="place-self-center"
    //         />
    //         <div className="grid items-center p-2">
    //           <p className="text-lg font-medium"><strong>Telephone:</strong> 0651-2360430,0651-2360435, 18002574010</p>
    //           <p className="text-lg"><strong>Phone:</strong> +91-7677111010</p>
    //         </div>
    //       </Card>

    //       <Card className="bg- sm:min-h-28 sm:min-w-52 grid grid-flow-col justify-center rounded-none shadow-none  ... transition duration-500 transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none border-none  hover:border-b-2  hover:border-b-sky-700 hover:bg-white ">
    //         <Globe
    //           size={48}
    //           color="#0284c7"
    //           strokeWidth={1}
    //           className="place-self-center"
    //         />
    //         <div className="grid items-center p-2 text-nowrapx` ">
    //         <span className="flex items-center md:justify-end gap-4 mt-4 md:mt-0 mr-4">
    //       <a href="https://www.facebook.com/sjhrc.in" aria-label="Facebook">
    //         <BsTwitter
    //           strokeWidth={1.5}
    //           className="text-muted-foreground transition-colors size-8  hover:text-sky-400  "
    //         />
    //       </a>
    //       <a href="https://x.com/Sjhrcranchi" aria-label="Twitter">
    //         <FaInstagram
    //           strokeWidth={1.5}
    //           className="text-muted-foreground transition-colors size-8   hover:text-rose-600"
    //         />
    //       </a>
    //       <a
    //         href="https://www.instagram.com/shreejagannathhospital/"
    //         aria-label="Instagram"
    //       >
    //         <FaFacebookF
    //           strokeWidth={1.5}
    //           className="text-muted-foreground transition-colors size-8   hover:text-blue-700"
    //         />
    //       </a>
    //       <a
    //         href="https://www.youtube.com/@sjhrcjagannath9636"
    //         aria-label="YouTube"
    //       >
    //         <FaYoutube
    //           strokeWidth={1.5}
    //           className="text-muted-foreground transition-colors  size-8  hover:text-red-500"
    //         />
    //       </a>
    //     </span>
    //         </div>
    //       </Card>
    //       <Card className="bg- sm:min-h-28 sm:min-w-52 grid grid-flow-col justify-center rounded-none shadow-none  ... transition duration-500 transform hover:-translate-y-4 motion-reduce:transition-none motion-reduce:hover:transform-none border-none hover:border-b-2  hover:border-b-sky-700 hover:bg-white ">
    //         <Mail
    //           size={48}
    //           color="#0284c7"
    //           strokeWidth={1}
    //           className="place-self-center"
    //         />
    //         <div className="grid items-center p-2">
             
    //           <p className="text-lg"><strong>Email:</strong>info@ranihospital.com</p>
    //         </div>
    //       </Card>
    //     </div>
    //       </div>
    //   {/* Contact Form */}
    //   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 lg:p-8 ">
    //     <div className="shadow-inner shadow-sky-700 rounded-md bg-sky-100 p-4 w-full max-w-md">
    //         <h1 className="text-2xl text-sky-700 py-4 font-medium">Leave Us Message</h1>
    //       {/* Input fields */}
    //       <div className="grid gap-4">
    //         <Input
    //           type="text"
    //           placeholder="Your Name"
    //           className="bg-white rounded-sm h-12 text-lg px-4 w-full"
    //         />
    //         <Input
    //           type="text"
    //           placeholder="Your Phone"
    //           className="bg-white rounded-sm h-12 text-lg px-4 w-full"
    //         />
    //         <Input
    //           type="email"
    //           placeholder="Email Address"
    //           className="bg-white rounded-sm h-12 text-lg px-4 w-full"
    //         />
    //       </div>
         
    //       {/* Message textarea */}
    //       <Textarea
    //         placeholder="Type your message here."
    //         className="bg-white text-lg shadow-sm rounded-sm mt-4 w-full h-32 px-4"
    //       />
    //       {/* Submit Button */}
    //       <Button type="submit" className="mt-4 w-full lg:w-auto">
    //         Send
    //       </Button>
    //     </div>
    //     {/* Map Section */}
    //     <div className="w-full">
    //       <iframe
    //         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1613.084419072957!2d85.3211006131735!3d23.38254792740877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e11843d380af%3A0x39715bc46113cea3!2sRani%20Hospital!5e0!3m2!1sen!2sin!4v1725520827984!5m2!1sen!2sin"
    //         width="100%"
    //         height="400"
    //         allowFullScreen=""
    //         loading="lazy"
    //         referrerPolicy="no-referrer-when-downgrade"
    //         className="rounded-md shadow-lg"
    //       ></iframe>
    //     </div>
    //   </div>
    // </section>
    <section className="p-4">
  {/* Title Section */}
  <Title title="Contact Us" />

  {/* Contact Info Section */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center my-8">
    
    {/* Telephone Card */}
    <Card className="bg-white w-full sm:min-h-28 sm:min-w-52 grid grid-flow-col justify-center rounded-none shadow-none transition duration-500 transform hover:-translate-y-2 border-none hover:border-b-2 hover:border-b-sky-700 hover:bg-white">
      <Smartphone
        size={48}
        color="#0284c7"
        strokeWidth={1}
        className="place-self-center"
      />
      <div className="grid items-center p-2">
        <p className="text-lg font-medium"><strong>Telephone:</strong> 0651-2360430, 0651-2360435, 18002574010</p>
        <p className="text-lg"><strong>Phone:</strong> +91-7677111010</p>
      </div>
    </Card>

    {/* Social Media Links Card */}
    <Card className="bg-white w-full sm:min-h-28 sm:min-w-52 grid grid-flow-col justify-center rounded-none shadow-none transition duration-500 transform hover:-translate-y-2 border-none hover:border-b-2 hover:border-b-sky-700 hover:bg-white">
      <Globe
        size={48}
        color="#0284c7"
        strokeWidth={1}
        className="place-self-center"
      />
      <div className="grid items-center p-2">
        <span className="flex gap-4">
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
        </span>
      </div>
    </Card>

    {/* Email Card */}
    <Card className="bg-white w-full sm:min-h-28 sm:min-w-52 grid grid-flow-col justify-center rounded-none shadow-none transition duration-500 transform hover:-translate-y-2 border-none hover:border-b-2 hover:border-b-sky-700 hover:bg-white">
      <Mail
        size={48}
        color="#0284c7"
        strokeWidth={1}
        className="place-self-center"
      />
      <div className="grid items-center p-2">
        <p className="text-lg"><strong>Email:</strong> info@ranihospital.com</p>
      </div>
    </Card>
  </div>

  {/* Contact Form and Map Section */}
  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-4 lg:p-8">
    
    {/* Contact Form */}
    <div className="shadow-inner shadow-sky-700 rounded-md bg-sky-100 p-4 w-full max-w-md mx-auto">
      <h1 className="text-2xl text-sky-700 py-4 font-medium">Leave Us Message</h1>
      
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

    {/* Map */}
    <div className="w-full">
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
  </div>
</section>

  );
};

export default ContactMap;
