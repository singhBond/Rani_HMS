import React from "react";
import { Card,  } from "@/components/ui/card"; // Assuming you're using a Card component from your UI library.
import Title from "@/components/Title"; // Assuming you're using a Title component.
import {
  FaBed,
  FaUserInjured,
  FaFlask,
  FaStethoscope,
  FaAmbulance,
  FaDollarSign,
} from "react-icons/fa";
import { ClockArrowUp, Radio } from "lucide-react";

const DashboardPage: React.FC = () => {
  // Dummy data
  const stats = {
    opdVisits: 200,
    ipdAdmissions: 80,
    ipdDischarges: 60,
    emergencyVisits: 50,
    labSamples: 150,
    radiologyReports: 100,
    totalBeds: 200,
    availableBeds: 50,
    cashPatients: 120,
    corporatePatients: 30,
    insurancePatients: 40,
    ayushmaanPatients: 20,
  };

  const cardsData = [
    {
      title: "OPD Visits",
      value: stats.opdVisits,
      icon: <FaStethoscope className="text-blue-500" />,
    },
    {
      title: "IPD Admissions",
      value: stats.ipdAdmissions,
      icon: <FaUserInjured className="text-green-500" />,
    },
    {
      title: "IPD Discharges",
      value: stats.ipdDischarges,
      icon: <FaUserInjured className="text-orange-500" />,
    },
    {
      title: "Emergency Visits",
      value: stats.emergencyVisits,
      icon: <FaAmbulance className="text-red-500" />,
    },
    {
      title: "Lab Samples Collected",
      value: stats.labSamples,
      icon: <FaFlask className="text-yellow-500" />,
    },
    {
      title: "Radiology Reports",
      value: stats.radiologyReports,
      icon: <FaFlask className="text-purple-500" />,
    },
    {
      title: "Total Beds",
      value: stats.totalBeds,
      icon: <FaBed className="text-gray-500" />,
    },
    {
      title: "Available Beds",
      value: stats.availableBeds,
      icon: <FaBed className="text-green-500" />,
    },
    {
      title: "Cash Patients",
      value: stats.cashPatients,
      icon: <FaDollarSign className="text-green-500" />,
    },
    {
      title: "Corporate Patients",
      value: stats.corporatePatients,
      icon: <FaDollarSign className="text-blue-500" />,
    },
    {
      title: "Insurance Patients",
      value: stats.insurancePatients,
      icon: <FaDollarSign className="text-purple-500" />,
    },
    {
      title: "Ayushmaan Patients",
      value: stats.ayushmaanPatients,
      icon: <FaDollarSign className="text-yellow-500" />,
    },
  ];

  return (
    <section className="section p-4 sm:p-6 lg:p-8">
      <Title title="E-Hospital Dashboard" />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-6 mt-8">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="p-4 shadow-md shadow-primary rounded-lg flex flex-col items-center"
          >
            <span className="flex place-self-start font-sans text-xs"> <Radio color="#d41616" size={16} />TODAY's STATUS</span>
            <div className="grid justify-items-center space-y-2">
              {card.icon}
              <h3 className="text-lg font-medium text-gray-700">
                {card.title}
              </h3>
              <p className="text-2xl font-semibold text-gray-900">
                {card.value}
              </p>
            </div>

            <div className="flex place-self-end text-sm ">
              <ClockArrowUp className="size-4" />
              12 hours ago
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default DashboardPage;
