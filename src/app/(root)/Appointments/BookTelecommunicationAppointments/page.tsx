"use client"
import React, { useState } from 'react';
import Title from '@/components/Title'
import Link from 'next/link'

import Marquee from 'react-fast-marquee'
import { useForm, SubmitHandler } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
interface AppointmentFormInputs {
  fullName: string;
  email: string;
  phone: string;
  appointmentDate: Date | null;
  message: string;
}
const page: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AppointmentFormInputs>();

  const onSubmit: SubmitHandler<AppointmentFormInputs> = (data) => {
    console.log(data);
    alert(`Appointment booked successfully for ${data.appointmentDate}`);
  };

// const page = () => {
  return (
    <section className='section'>
        <div className='space-y-4'>
            <Title title={"Book Appointment on Telephone"}/>
            <h1 className='text-lg'><Link href={""} className='underline'>000000000</Link>  Timing for OPD booking on this Telephone is from 8:00 AM to 4:00 PM on Monday to Friday ( all working days).  On  Saturday ( working day),  the timing for OPD appointment booking is from 8:00 AM to 1:00 PM.</h1>
            <p className='text-lg' > "The appointment for new case is available for one month ( depending upon the availability of OPD slots) from the date of applying for appointment and for the follow-up, the appointment is available for three months ( also depending upon the availability of OPD slots) from the date of applying for the appointment".</p>
        </div>
      <Marquee className='bg-sky-700 text-white py-2 my-6'>Note:- If appointments are not available on O.R.S portal, then   please do not call the call centre, as appointment through ORS portal and phone is from same pool.</Marquee>
      <div className=" p-6 max-w-2xl mx-auto">
      {/* Page Title */}
      <div className="text-center mb-8">
     
        <p className="text-gray-600 mt-2">
          Please fill out the form below to schedule your appointment.
        </p>
      </div>

      {/* Appointment Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-md rounded-lg p-6">
        {/* Full Name */}
        <div className="mb-4">
          <label htmlFor="fullName" className="block text-lg font-medium mb-2">
            Full Name
          </label>
          <Input
            type="text"
            id="fullName"
            placeholder="Enter your full name"
            {...register('fullName', { required: true })}
            className="w-full"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm mt-1">Full Name is required</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-medium mb-2">
            Email
          </label>
          <Input
            type="email"
            id="email"
            placeholder="Enter your email address"
            {...register('email', { required: true, pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/ })}
            className="w-full"
          />
          {errors.email && (
            <p className="text-red-600 text-sm mt-1">Valid email is required</p>
          )}
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label htmlFor="phone" className="block text-lg font-medium mb-2">
            Phone
          </label>
          <Input
            type="text"
            id="phone"
            placeholder="Enter your phone number"
            {...register('phone', { required: true })}
            className="w-full"
          />
          {errors.phone && (
            <p className="text-red-600 text-sm mt-1">Phone number is required</p>
          )}
        </div>

        {/* Appointment Date */}
        <div className="mb-4">
          <label htmlFor="appointmentDate" className="block text-lg font-medium mb-2">
            Appointment Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="w-full bg-white border border-gray-300 rounded px-4 py-2"
            placeholderText="Select a date"
            showTimeSelect
            dateFormat="Pp"
          />
          {selectedDate === null && (
            <p className="text-red-600 text-sm mt-1">Please select a date and time</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-medium mb-2">
            Message (optional)
          </label>
          <Textarea
            id="message"
            placeholder="Add any message for the doctor"
            {...register('message')}
            className="w-full"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button type="submit" className="w-full lg:w-auto bg-sky-600 hover:bg-sky-700 text-white py-2 px-4 rounded">
            Book Appointment
          </Button>
        </div>
      </form>
    </div>
    </section>
  )
}

export default page
