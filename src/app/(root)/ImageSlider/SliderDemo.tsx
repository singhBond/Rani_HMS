"use client";
import React from "react";
import { useState } from "react";
import { CarouselDemo } from "@/components/CarouselDemo";


type SliderImage = {
  url: string;
};
const Slider = () => {
  const [sliderImages, setSliderImages] = useState<SliderImage[]>([
    { url: "/sliderImage/2.png" },
    { url: "/sliderImage/5.png" },
    { url: "/sliderImage/award.png" },
    { url: "/sliderImage/buildingcopy1.png" },
    { url: "/sliderImage/accreditations1.png" },
    { url: "/sliderImage/slidedoctor.png" },
  ]);

  const handleUpdateImages = (updatedImages: SliderImage[]) => {
    setSliderImages(updatedImages);
  };
  return (
    <div className="w-full overflow-hidden">
      <CarouselDemo userImages={sliderImages} />
      
    </div>
  );
};

export default Slider;
