"use client"
import * as React from "react";
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type SliderImage = {
  url: string;
};

interface CarouselDemoProps {
  userImages: SliderImage[];
}

export function CarouselDemo({ userImages = [] }: CarouselDemoProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayInterval = 3000;
  const [isHovered, setIsHovered] = useState(false);
  const [images, setImages] = useState<SliderImage[]>(userImages);

  const itemLength = images.length;

  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) =>
          prevIndex === itemLength - 1 ? 0 : prevIndex + 1
        );
      }, autoPlayInterval);

      return () => clearInterval(interval);
    }
  }, [itemLength, isHovered]);

  const handlePrevious = () => {
    setActiveIndex(activeIndex === 0 ? itemLength - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === itemLength - 1 ? 0 : activeIndex + 1);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    // <section>
    // <div className="w-full max-w-full relative">
    //   <Carousel
    //     onMouseEnter={handleMouseEnter}
    //     onMouseLeave={handleMouseLeave}
    //   >
    //     <CarouselContent
    //       style={{
    //         transform: `translateX(-${activeIndex * 100}%)`,
    //         transition: "transform 0.8s ease-in-out",
    //       }}
    //     >
    //       {images.map((image, index) => (
    //         <CarouselItem key={index} className="min-w-full">
    //           <div className="p-1">
    //             <Card className="rounded-lg shadow-lg overflow-hidden">
    //               <CardContent className="flex items-center justify-center p-0">
    //                 <img
    //                   src={image.url}
    //                   alt={`Slide ${index + 1}`}
    //                   className="w-full h-[450px] object-fill transition-transform duration-700 ease-in-out transform hover:scale-105"
    //                 />
    //               </CardContent>
    //             </Card>
    //           </div>
    //         </CarouselItem>
    //       ))}
    //     </CarouselContent>
    //     <CarouselPrevious onClick={handlePrevious} />
    //     <CarouselNext onClick={handleNext} />
    //   </Carousel>
    // </div>
    // </section>
    <section>
  <div className="w-full max-w-full relative">
    <Carousel
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CarouselContent
        style={{
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "transform 0.8s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <CarouselItem key={index} className="min-w-full">
            <div className="p-2">
              <Card className="rounded-lg shadow-lg overflow-hidden">
                <CardContent className="flex items-center justify-center p-0">
                  <img
                    src={image.url}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] object-cover transition-transform duration-700 ease-in-out transform hover:scale-105"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      
      {/* Carousel Navigation */}
      <CarouselPrevious
        onClick={handlePrevious}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 text-white bg-sky-700 p-2 rounded-full hover:bg-sky-600 transition"
      />
      <CarouselNext
        onClick={handleNext}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 text-white bg-sky-700 p-2 rounded-full hover:bg-sky-600 transition"
      />
    </Carousel>
  </div>
</section>

  );
}
