import React from "react";
import SliderDemo from "@/app/(root)/ImageSlider/SliderDemo";
import About from "@/app/(root)/About/aboutDashboard";
import Specialities from "@/app/(root)/Specialities/page";
import Notice from "@/app/(root)/Notice/page";
import Gallery from "@/app/(root)/gallery/page"
import AutoScrollCard from "@/components/AutoScrollCard";
import ContactMap from "@/components/ContactMap";
import{GalleryAuto}   from "@/app/(root)/GalleryAuto/page";
import Tabs from "@/components/tabs";
import OurAdmins from "@/app/(root)/OurAdmins/page";

const dashboard = () => {
  return (
    <>
      <div className="bg-sky-50">
        <SliderDemo />
        <About />
        <OurAdmins/>
        <Specialities />
        <Notice />
        {/* <Gallery/> */}
        <GalleryAuto/>
       <ContactMap/>
       {/* <Tabs/> */}
       
      </div>
    </>
  );
};

export default dashboard;
