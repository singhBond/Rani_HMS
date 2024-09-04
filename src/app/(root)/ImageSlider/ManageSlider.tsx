"use client"
import React, { useState } from "react";
import ManageSliderImages from "@/components/ManageSliderImages";
import { CarouselDemo } from "@/components/CarouselDemo";

type SliderImage = {
  url: string;
};

const Slider = () => {
  const [sliderImages, setSliderImages] = useState<SliderImage[]>([
    { url: "/sliderImage/2.png" },
    { url: "/sliderImage/5.png" },
    { url: "/sliderImage/award.png" },
    { url: "/sliderImage/builidngcopy1.png" },
    { url: "/sliderImage/accreditations1.png" },
    { url: "/sliderImage/hmsLogo.png" },
    { url: "/sliderImage/sliderdoctor.png" },
  ]);

  const handleUpdateImages = (updatedImages: SliderImage[]) => {
    setSliderImages(updatedImages);
  };

  return (
    <div>
      <ManageSliderImages userImages={sliderImages} onUpdateImages={handleUpdateImages} />
      {/* No need to pass onUpdateImages to CarouselDemo */}
      <CarouselDemo userImages={sliderImages} />
    </div>
  );
};

export default Slider;
