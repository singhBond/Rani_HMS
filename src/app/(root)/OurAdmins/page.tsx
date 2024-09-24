import Title from '@/components/Title';
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import React from 'react'

const AdminsData = [
  {
    id: 1,
    name: "Dr. Krishna Kumar",
    qualification: "DCH, MD(Paed), MRCP, HOD(Paediatrics)",
    designation: "Senior Consultant Paediatrics/Neonatology",
    image: "/AdminsImg/drkrishna.png"
  },
  {
    id: 2,
    name: "Dr. Ajay Ghosh",
    qualification: "DCH, M.D.(Paed)",
    designation: "Senior Consultant Paediatrics",
    image: "/AdminsImg/drajay.png"
  },
  {
    id: 3,
    name: "Dr. Rajesh Kumar",
    qualification: "M.D.(Paed), D.M.(Neonat) (Gold medalist)",
    designation: "Medical Director cum Senior Consultant",
    image: "/AdminsImg/drrajesh.png"
  },
  {
    id: 4,
    name: "Dr. Shailesh Chandra",
    qualification: "M.D.(Paed)",
    designation: "Senior Consultant Paediatrics/Neonatology",
    image: "/AdminsImg/drshailesh.png"
  },
  {
    id: 5,
    name: "Dr. Khalid M Saifullah",
    qualification: "MD(Paed), MRCP(Paed), MSc(Neonat)",
    designation: "Senior Consultant Paediatrics/Neonatology",
    image: "/AdminsImg/drkhalid.png"
  },
  {
    id: 6,
    name: "Dr. Prem Ranjan Kumar",
    qualification: "M.D.(Paed)",
    designation: "Medical superintendent cum Senior Consultant Paediatrics",
    image: "/AdminsImg/drprem.png"
  },
  {
    id: 7,
    name: "Dr. Vinod Kumar",
    qualification: "MBBS, DCH",
    designation: "Fellowship in Neonatology Senior Consultant Neonatology/Paediatrics",
    image: "/AdminsImg/vinod.png"
  },
  {
    id: 8,
    name: "Dr. Ramanuj Kumar",
    qualification: "MBBS, MS, MCH",
    designation: "Paediatric Surgeon",
    image: "/AdminsImg/ramanuj.png"
  },
  {
    id: 9,
    name: "Dr. Tarun Adukia",
    qualification: "MMBBS, MS, MCH(Neurosurgery)",
    designation: "Consultant Neuroscience",
    image: "/AdminsImg/tarun.png"
  },
];

const page = () => {
  return (
    <section className='section '>
        {/* <Title title={"Our Admins"}/> */}
      <div className='container mx-auto px-4 py-6  flex flex-col items-center  lg:flex-row lg:justify-between'>
        {/* Experts Info */}
        <div className='bg-primary text-white p-6 rounded-md mb-6 lg:mb-0 lg:w-1/3'>
          <h1 className='text-2xl font-bold mb-4'>Our Medical Experts</h1>
          <p className='text-slate-200 mb-4'>
            Rani Hospital is home to 50 eminent doctors in India, most of whom are pioneers in their respective fields.
          </p>
          <Button variant={"hms"} className='w-full lg:w-auto'>Book Appointment</Button>
          <img src="/AdminsImg/images.png" alt="Rani Hospital" className='mt-6 w-full h-auto' />
        </div>

        {/* Doctors List */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 lg:w-2/3'>
          {AdminsData.map((doctor) => (
            <Card key={doctor.id} className='shadow-md rounded w-40 h-56 mx-auto'>
              <img src={doctor.image} alt={doctor.name} className='object-cover h-32 w-full rounded-t-md' />
              <div className='px- text-center'>
                <h2 className='font-semibold text-sm'>{doctor.name}</h2>
                <p className='text-xs text-slate-600 mt-1'>{doctor.qualification}</p>
                <p className='text-xs text-slate-600'>{doctor.designation}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default page;
