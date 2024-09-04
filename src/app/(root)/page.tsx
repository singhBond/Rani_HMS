import React from "react";
import SliderDemo from "@/app/(root)/ImageSlider/SliderDemo";
import About from "@/app/(root)/About/page";
import Specialities from "@/app/(root)/Specialities/page";
import Notice from "@/app/(root)/Notice/page";
import Gallery from "@/app/(root)/gallery/page"

const dashboard = () => {
  return (
    <>
      <div className="bg-sky-50">
        <SliderDemo />
        <About />
        <Specialities />
        <Notice />
        <Gallery/>
      </div>
    </>
  );
};

export default dashboard;
