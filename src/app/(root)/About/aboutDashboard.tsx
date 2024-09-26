import Title from "@/components/Title";
import { Card } from "@/components/ui/card";
import { Stethoscope } from "lucide-react";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Services = [
  { id: 1, name: "Paediatrics", icon: <Stethoscope /> },
  { id: 2, name: "Neonatal Care", icon: <Stethoscope /> },
  { id: 3, name: "Ambulance Services", icon: <Stethoscope /> },
  { id: 4, name: "Paediatrics Superspeciality", icon: <Stethoscope /> },
  { id: 5, name: "Neonatal ICU", icon: <Stethoscope /> },
  { id: 6, name: "Laboratory Services", icon: <Stethoscope /> },
  { id: 7, name: "Paediatrics Intensive Care", icon: <Stethoscope /> },
  { id: 8, name: "Laboratory Medicine", icon: <Stethoscope /> },
  { id: 9, name: "NeuroScience", icon: <Stethoscope /> },
  { id: 10, name: "Anaesthesiology", icon: <Stethoscope /> },
  { id: 11, name: "Pharmacy", icon: <Stethoscope /> },
  { id: 12, name: "Emergency", icon: <Stethoscope /> },
];

const page = () => {
  return (
    <section className="section ">
      {/* Emergency Info */}
      <h1 className="bg-primary text-center text-xl md:text-2xl lg:text-3xl text-white p-4">
        Emergency No. (24x7): 7677111010
      </h1>

      {/* About Us Section */}
      
      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 mx-8 justify-items-center">
        <div className="lg:max-w-lg shadow-inner shadow-sky-700 bg-sky-100 rounded-l-3xl border-l-8 border-sky-700 p-4  ">
        <Title title="About Us" />
          <p className="text-sm md:text-base lg:text-lg font-serif leading-relaxed ">
            Rani Hospital has grown overtime by extending child healthcare
            specialization in a medically underdeveloped state like Jharkhand.
            Excellence in the healthcare services has made us a reputation of
            Regional Tertiary Health Centre for newborn and children in the
            region. We have a very large share of patients from nearby states.
            Rani Hospital is a 225 bedded super speciality children hospital
            situated in the capital of Jharkhand. We have the honour of being
            the largest treatment facility for sick children in private sector
            in India. We are in the 18th year of glorious excellence in child
            care. Our founder Hon. Dr. Rajesh took courageous decision to start
            a state of the art facility for children healthcare in the region.
            Rani hospital has come a long way in tertiary child care not only in
            the state of Jharkhand but in the whole eastern part of the country.
           
          </p>
        </div>

        {/* Tabs Section */}
        <div className="grid justify-self-center">
          <Tabs defaultValue="specialities" className="w-3/4  ">
            <TabsList className="flex bg-transparent space-x-2">
              <TabsTrigger className="underline" value="specialities">
                Specialities
              </TabsTrigger>
              <TabsTrigger className="underline" value="services">
                Services
              </TabsTrigger>
            </TabsList>

            {/* Specialities Tab Content */}
            <TabsContent value="specialities">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {Services.map((service) => (
                  <Card
                    key={service.id}
                    className="shadow-md rounded w-full max-w-xs h-24 flex items-center justify-center mx-auto"
                  >
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        {service.icon}
                      </div>
                      <p className="text-sm ">{service.name}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Services Tab Content */}
            <TabsContent value="services">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  "Ambulance Service",
                  "7677111010, 0651-2360430",
                  "Centre of Excellence in Children's Health Care",
                  "Neonatology, Paediatrics",
                  "Interstate Ambulance Services",
                  "HHFO, CPAP",
                  "All Neonatal Procedures",
                  "Screening of Newborns",
                  "All types of Paediatric Surgery",
                ].map((service, idx) => (
                  <Card
                    key={idx}
                    className="shadow-md rounded w-full max-w-xs h-24 flex items-center justify-center mx-auto"
                  >
                    <div className="text-center">
                      <p className="text-sm font-medium">{service}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default page;
