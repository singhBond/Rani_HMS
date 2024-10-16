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
  { id: 10, name: "Anesthsiology", icon: <Stethoscope /> },
  { id: 11, name: "Pharmacy", icon: <Stethoscope /> },
  { id: 12, name: "Emergency", icon: <Stethoscope /> },
];

const styles = {
  container: {
    padding: '20px',
    // backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5em',
    marginBottom:'16px',
    color: '#333',
  },
  paragraph: {
    fontSize:'1.2em',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
};

const page = () => {
  return (
    <section className="section ">
      {/* Emergency Info */}
      <h1 className="bg-primary text-center text-xl md:text-2xl lg:text-3xl text-white p-4">
        Emergency No. (24x7): 7677111010
      </h1>

    
      {/* About Us Section */}

      <div className="grid grid-cols-1 lg:grid-cols-2 p-8 mx-8 justify-items-center">
       
        <div style={styles.container}>
      <h2 style={styles.heading}>About Us</h2>
      <p style={styles.paragraph}>
        Welcome to our website! We are a dedicated team passionate about delivering the best service and products to our customers. 
        Our mission is to provide innovative solutions and exceptional customer experiences. 
        Thank you for being a part of our journey!
      </p>
      <p style={styles.paragraph}>
        Our values include integrity, excellence, and commitment to continuous improvement. We strive to maintain high standards 
        and work towards making a positive impact in our community and industry.
      </p>
    </div>


        {/* Tabs Section */}
        <div className="grid justify-self-center">
          <Tabs defaultValue="specialities" className="w-3/4  ">
            <TabsList className="flex bg-transparent space-x-2 ">
              <TabsTrigger className=" bg-primary text-white" value="specialities">
                Specialities
              </TabsTrigger>
              <TabsTrigger className=" bg-primary text-white" value="services">
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
