"use client";
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
import Title from "@/components/Title";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const autoPlayInterval = 3000; // Autoplay interval for carousel

  const images = [{ url: "/sliderImage/2.png" }, { url: "/sliderImage/5.png" }];
  const itemLength = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === itemLength - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval); // Clean up on unmount
  }, [itemLength]);

  const handlePrevious = () => {
    setActiveIndex(activeIndex === 0 ? itemLength - 1 : activeIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(activeIndex === itemLength - 1 ? 0 : activeIndex + 1);
  };

  return (
    <section className="">
      <Title title={"About Us"} />
      <div className="bg-sky-50 py-4 px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Carousel Section */}
        <div className="relative p-4 flex justify-center items-center">
          <Carousel className="w-full max-w-md lg:max-w-lg">
            <h1 className="bg-primary text-2xl text-white font-serif text-center py-2">
              Gallery
            </h1>
            <CarouselContent
              style={{
                transform: `translateX(-${activeIndex * 100}%)`,
                transition: "transform 0.5s ease-in-out",
              }}
            >
              {images.map((image, index) => (
                <CarouselItem key={index} className="min-w-full">
                  <Card className="shadow-lg">
                    <CardContent className="flex items-center justify-center p-0">
                      <img
                        src={image.url}
                        alt={`Slide ${index + 1}`}
                        className="w-full h-64 object-cover"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious onClick={handlePrevious} />
            <CarouselNext onClick={handleNext} />
          </Carousel>
        </div>

        {/* About Section */}
        <div className="shadow-inner shadow-sky-700 bg-sky-100 rounded-l-3xl border-l-8 border-sky-700 flex flex-col justify-center font-serif text-lg p-8">
          <p>
            We are a center of excellence in children’s healthcare. The idea of
            setting up a good hospital for children was born over four decades
            ago when our medical director was still studying in kinder gardens
            at Daltonganj. His Nanaji (Maternal grandfather) was the head clerk
            in district hospital Palamu at Daltonganj. Currently this hospital
            is run by a non-profit charitable organization; “Dukhharan Memorial
            Charitable Trust”. This trust has been formed in the memory of our
            medical director’s Nanaji (Late Sri Dukhharan Prasad Sinha). Our
            team started a children’s hospital in rented premises in year 2004
            (Rani Children Hospital, Karamtoli, Ranchi). This modern Children’s
            Hospital (Rani Hospital) was started in year 2010. Till year 2015
            theses two hospitals were run by a private limited company. The
            assets related to the hospitals were donated to the trust in year
            2015. Since then these hospital are run by the trust.
          </p>
        </div>
      </div>

      {/* Additional Information */}
      <div className="bg-sky-50 py-8 px-4 md:px-12 font-serif text-lg  ">
        <div className="shadow-inner shadow-sky-700 bg-sky-100 rounded-l-3xl border-l-8 border-sky-700 p-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
          <p>
            We are in the 20th year of glorious excellence in child care. Our
            founder Hon. Dr. Rajesh took courageous decision to start a state of
            the art facility for children healthcare in the region. Rani
            hospital has come a long way in tertiary child care not only in the
            state of Jharkhand but in the whole eastern part of the country.
            There are many medical facilities, which are not available elsewhere
            in the region. Rani hospital is 225+ bed multi-speciality health
            centres for Paediatrics with Doctors having decades of experience in
            handling critical cases. [List some awards and Recognitions also]
          </p>
        </div>

        <div className="shadow-inner shadow-sky-700 bg-sky-100 rounded-l-3xl border-l-8 border-sky-700 p-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Quality Policy</h2>
          <p>
            We are committed to meet and exceed the requirements and
            expectations of our individual and corporate patients by providing
            coordinated, compassionate and high-quality healthcare services.
          </p>
        </div>

        <div className="shadow-inner shadow-sky-700 bg-sky-100 rounded-l-3xl border-l-8 border-sky-700 p-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">
            how the dream become reality
          </h2>
          <p>
            The idea of setting up a good hospital for children was born over
            four decades ago when our medical director was still studying in
            kinder gardens at Daltonganj. His Nanaji (Maternal grandfather) was
            the head clerk in district hospital Palamu at Daltonganj. Currently
            this hospital is run by a non-profit charitable organization;
            “Dukhharan Memorial Charitable Trust”. This trust has been formed in
            the memory of our medical director’s Nanaji (Late Sri Dukhharan
            Prasad Sinha). Our team started a children’s hospital in rented
            premises in year 2004 (Rani Children Hospital, Karamtoli, Ranchi).
            This modern Children’s Hospital (Rani Hospital) was started in year
            2010. Till year 2015 theses two hospitals were run by a private
            limited company. The assets related to the hospitals were donated to
            the trust in year 2015. Since then these hospital are run by the
            trust.
          </p>
        </div>
        <div className="flex justify-center gap-6">
          <div className="shadow-inner shadow-sky-700 bg-sky-100 rounded-l-3xl border-l-8 border-sky-700 p-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p>
              Our mission is to be a centre of excellence for neonatal and
              paediatric health care in India.
            </p>
          </div>
          <div className="shadow-inner shadow-sky-700 bg-sky-100 rounded-l-3xl border-l-8 border-sky-700 p-8 mb-4">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p>
              Our Vision is to provide highest standard of care at affordable
              cost.
            </p>
          </div>
        </div>
        

        <div className="shadow-inner shadow-sky-700 bg-sky-100 rounded-l-3xl border-l-8 border-sky-700 p-8 mb-4">
          <h2 className="text-2xl font-bold mb-4">Our Values</h2>
          <ul className="list-disc pl-6">
            <li>
              We maintain the highest standards and achieve them by continually
              measuring and improving our outcomes.
            </li>
            <li>
              We welcome change, encourage invention and continually seek
              better, more efficient ways to achieve our goals.
            </li>
            <li>
              We collaborate and share knowledge to benefit patients and fellow
              caregivers for the advancement of our mission.
            </li>
            <li>
              We strive to exceed our patients' expectations for comfort and
              convenience.
            </li>
            <li>
              We adhere to high moral principles and professional standards by a
              commitment to honesty, confidentiality, trust, respect and
              transparency.
            </li>
            <li>
              We demonstrate our commitment to world-class care by providing a
              caring and supportive environment for our patients, patients'
              families and fellow caregivers.
            </li>
          </ul>
        </div>

        <div className="shadow-inner shadow-sky-700 bg-sky-100 rounded-l-3xl border-l-8 border-sky-700 p-8">
          <h2 className="text-2xl font-bold mb-4">What we do</h2>
          <p>
            We have a complete range of child healthcare services from critical
            care to preventive care. Most babies admitted to the NICU are
            premature (born before 37 weeks of pregnancy), have low birth weight
            (less than 2.5 Kgs), have a medical condition that requires special
            care or any other life threatening condition. Twins, triplets, and
            other multiples often are admitted to the NICU, as they tend to be
            born earlier and smaller than single birth babies. Babies with
            medical conditions such as heart problems, infections, or birth
            defects are also cared for in the NICU.
            <p>
              Care of illness supported by our multi disciplinary specialty
              services including General Paediatrics, Neonatology, Nephrology,
              Neurology, Gastroenterology, Haematology, Oncology, Cardiology,
              Genetic and Metabolic Diseases, Paediatric Dentistry and
              Nutrition.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Page;
