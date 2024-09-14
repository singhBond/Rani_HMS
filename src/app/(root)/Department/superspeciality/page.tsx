import Subtitle from "@/components/Subtitle";
import Title from "@/components/Title";
import React from "react";
const SuperSpeciality = {
  card1: [
    {
      id: 1,
      description: " Paediatrics",
    },
    {
      id: 2,
      description: "Neonatal Care",
    },
    {
      id: 3,
      description: "Ambulance Services",
    },
    {
      id: 4,
      description: "Paediatrics Superspeciality",
    },
    {
      id: 5,
      description: " Neonatal ICU",
    },
    {
      id: 6,
      description: "Laboratory Services",
    },
  ],
  card2: [
    {
      id: 1,
      description: "Paediatrics Intensive Care",
    },
    {
      id: 2,
      description: "Laboratory Medicine",
    },
    {
      id: 3,
      description: " NeuroScience",
    },
    {
      id: 4,
      description: "Anaesthesiology",
    },
    {
      id: 5,
      description: " Pharmacy",
    },
    {
      id: 6,
      description: "Emergency",
    },
  ],
};
const page = () => {
  return (
    <section>
      <Title title={"Super Speciality"} />
      <Subtitle subtitle={"Rani Hospital is a super-specialty hospital providing healthcare services exclusively in the department of Pediatrics and Neonatology. We will provide pediatric and neonatal care for patients from birth through eighteen years of age. All our services are aligned to this super-specialty expertise only."}/> 
        
      

      {/* Specialities Grid */}
      <div className="flex flex-col lg:flex-row justify-center gap-8 py-6">
        {/* First Column of Specialities */}
        <div className="grid justify-center text-lg gap-4">
          {SuperSpeciality.card1.map((speciality, index) => (
            <ul key={speciality.id}>
              <li
                className={`px-6 py-4 text-center rounded-md transition duration-300 ${
                  index % 2 === 0
                    ? "bg-sky-200 border border-sky-900 border-dotted"
                    : "bg-white"
                }`}
              >
                {speciality.description}
              </li>
            </ul>
          ))}
        </div>

        {/* Second Column of Specialities */}
        <div className="grid justify-center text-lg gap-4">
          {SuperSpeciality.card2.map((speciality, index) => (
            <ul key={speciality.id}>
              <li
                className={`px-6 py-4 text-center rounded-md transition duration-300 ${
                  index % 2 === 0
                    ? "bg-white"
                    : "bg-sky-200 border border-sky-700 border-dotted"
                }`}
              >
                {speciality.description}
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
