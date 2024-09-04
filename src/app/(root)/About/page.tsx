import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Computer, HeartPulse, HousePlus, Stethoscope } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <div>
      <h1 className="bg-sky-700 grid justify-center text-3xl text-white w-full">
        Emergency No.(24x7) : 7677111010
      </h1>
      <h2 className="text-sky-700 text-4xl mt-8 text-center ">About Us</h2>
      {/* Medical Pictres */}
      <div className="grid grid-cols-2 sm:w-full sm:h-full lg:w-full lg:h-full ">
        <div className=" grid justify-center items-center  text-xl  ">
          <ul className="space-y-4 text-center text-sky-700 ">
            <li className="border-l-8 border-b-2 border-sky-700 shadow-2xl shadow-sky-700 rounded-full bg-sky-200 ">
              Ambulance Service
            </li>
            <li className="border-l-8 border-b-2 border-sky-700 shadow-2xl shadow-sky-700 rounded-full bg-sky-200 ">
              7677111010, 0651-2360430/
            </li>
            <li className="border-l-8 border-b-2 border-sky-700 shadow-2xl shadow-sky-700 rounded-full bg-sky-200 ">
              Centre of Excellence in Children's Health Care
            </li>
            <li className="border-l-8 border-b-2 border-sky-700 shadow-2xl shadow-sky-700 rounded-full bg-sky-200 ">
              Neonatology, Paediatrics
            </li>
            <li className="border-l-8 border-b-2 border-sky-700 shadow-2xl shadow-sky-700 rounded-full bg-sky-200 ">
              Interstate Ambilance Services
            </li>
            <li className="border-l-8 border-b-2 border-sky-700 shadow-2xl shadow-sky-700 rounded-full bg-sky-200 ">
              HHFO, CPAP
            </li>
            <li className="border-l-8 border-b-2 border-sky-700 shadow-2xl shadow-sky-700 rounded-full bg-sky-200 ">
              All Neonatal Procedures
            </li>
            <li className="border-l-8 border-b-2 border-sky-700 shadow-2xl shadow-sky-700 rounded-full bg-sky-200 ">
              Screening of Newborns
            </li>
            <li className="border-l-8 border-b-2 border-sky-700 shadow-2xl shadow-sky-700 rounded-full bg-sky-200 ">
              All tpye of Paediatric Surgery
            </li>
          </ul>
        </div>
        {/* About Area */}
        <div className="p-8">
          <h3 className="text-slate-800 text-2xl font-medium m-2">
            Our mission is to be a centre of excellence for neonatal and
            paediatric health care in India.
          </h3>
          <img src="/Logo/hmsLogo.png" alt="icon" className="mx-4" />
          <p className="text-slate-600 m-2">
            Rani Hospital has grown overtime by extending child healthcare
            specialization in a medically underdeveloped state like Jharkhand.
            Excellence in the healthcare services has made us a reputation of
            Regional Tertiary Health Centre for newborn and children in the
            region. We have a very large share of patients from nearby states.
            Rani Hospital is a 225 bedded super speciality children hospital
            situated in the capital of Jharkhand. We have the honour of being
            the largest treatment facility for sick children in private sector
            in India.
          </p>
          <p className="text-slate-600 m-2">
            We are in the 18th year of glorious excellence in child care. Our
            founder Hon. Dr. Rajesh took courageous decision to start a state of
            the art facility for children healthcare in the region. Rani
            hospital has come a long way in tertiary child care not only in the
            state of Jharkhand but in the whole eastern part of the country.
            There are many medical facilities, which are not available elsewhere
            in this region. Rani hospital is 225+ bed multi-speciality health
            centres for Paediatrics with Doctors having decades of experience in
            handling critical cases.
          </p>
          <p className="text-slate-600 m-2 ">
            We are an ethical, transparent group and follow purely ‘evidence
            based medicine’. Still our charges are almost equivalent to the
            charges prescribed by the government (CGHS rates for Ranchi). We
            caters for all the strata our society; low income families to the
            middle and upper income families. Currently we are mainly involved
            in the care of sick children. Soon we will be starting the services
            for the women also. For us the care of children will be the first
            priority.
          </p>
          <div className="grid grid-flow-col m-2 ">
            <Button className="bg-sky-700 rounded-md h-12 w-36  mt-4 ">
              More About
            </Button>
          </div>
        </div>
      </div>
      {/* Facility Info Cards */}
      <div className="grid grid-flow-col md:w-full md:h-full justify-center py-4 gap-8 ">
        <Card className="  transition ease-in-out delay-150 bg-sky-50   hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 ...  shadow-none border-none md:max-w-72 md:max-h-48 text-wrap  flex flex-col items-center hover:shadow-lg hover:shadow-sky-500  ">
          <img src="" alt="Medical Director" className="size-16 rounded-full bg-white" />

          <div className="grid grid-flow-row text-center text-wrap gap-2 m-2">
            <h1 className="text-lg font-medium">Name</h1>
            <p className="text-sm font-extralight  text-slate-800 ">
             Qalification
            </p>
            <p className="text-sm font-extralight  text-slate-800 ">"Quote"</p>
          </div>
        </Card>
        <Card className="  transition ease-in-out delay-150 bg-sky-50   hover:-translate-y-1 hover:scale-110 hover:bg-white duration-300 ...  shadow-none border-none md:max-w-72 md:max-h-48 text-wrap  flex flex-col items-center hover:shadow-lg hover:shadow-sky-500  ">
          <img src="" alt="Administrative Director" className="size-16 rounded-full bg-white" />

          <div className="grid grid-flow-row text-center text-wrap gap-2 m-2">
            <h1 className="text-lg font-medium">Name</h1>
            <p className="text-sm font-extralight  text-slate-800 ">
             Qalification
            </p>
            <p className="text-sm font-extralight  text-slate-800 ">"Quote"</p>
          </div>
        </Card>

        {/* <div>
          <a
            href="#"
            className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300  ... group block max-w-xs mx-auto rounded-lg p-8 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-600  hover:shadow-2xl hover:shadow-sky-600  "
          >
            <div className="flex items-center space-x-3">
              <HousePlus
                size={56}
                color="#0284c7"
                strokeWidth={1.5}
                className=" group-hover:stroke-white"
              />

              <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">
                Quality & Safety
              </h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm">
              Our Delmont hospital utilizes state of the art technology and
              employs a team of true experts.
            </p>
          </a>
        </div>

        <div>
          <a
            href="#"
            className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300 ... group block max-w-xs mx-auto rounded-lg p-8 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-600 hover:ring-sky-600 hover:shadow-2xl hover:shadow-sky-600 "
          >
            <div className="flex items-center space-x-3">
              <Computer
                size={56}
                color="#0284c7"
                strokeWidth={1.5}
                className=" group-hover:stroke-white"
              />

              <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">
                Leading Technology
              </h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm">
              Our Delmont hospital utilizes state of the art technology and
              employs a team of true experts.
            </p>
          </a>
        </div>

        <div>
          <a
            href="#"
            className="transition ease-in-out delay-100  hover:-translate-y-1 hover:scale-110 duration-300 ... group block max-w-xs mx-auto rounded-lg p-8 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-600 hover:ring-sky-600 hover:shadow-2xl hover:shadow-sky-600 "
          >
            <div className="flex items-center space-x-3">
              <Stethoscope
                size={56}
                color="#0284c7"
                strokeWidth={1.5}
                className=" group-hover:stroke-white"
              />

              <h3 className="text-slate-900 group-hover:text-white text-lg font-semibold">
                Experts by Exprience
              </h3>
            </div>
            <p className="text-slate-500 group-hover:text-white text-sm">
              Our Delmont hospital utilizes state of the art technology and
              employs a team of true experts.
            </p>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default page;
