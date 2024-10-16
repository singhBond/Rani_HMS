"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { format } from "date-fns";



//Department JSON
const departmentsData = {
  departments: [
    {
      id: 1,
      name: "Symptom 1",
      doctors: [
        {
          id: 101,
          name: "Dr.Thakur",
          availableSlots: ["9:00 AM - 10:00 AM", "10:00 AM - 11:00 AM"],
        },
        {
          id: 102,
          name: "Dr.Rathore",
          availableSlots: ["11:00 AM - 12:00 PM", "1:00 PM - 2:00 PM"],
        },
      ],
    },
    {
      id: 2,
      name: "Symptom 2",
      doctors: [
        {
          id: 103,
          name: "Dr. Singh",
          availableSlots: ["9:00 AM - 10:00 AM", "2:00 PM - 3:00 PM"],
        },
        {
          id: 104,
          name: "Dr. Chauhan",
          availableSlots: ["10:00 AM - 11:00 AM", "3:00 PM - 4:00 PM"],
        },
      ],
    },
  ],
};



// Function to generate a random booking ID
const generateBookingId = () => {
  return `BOOKING NO.-${Math.floor(1000 + Math.random() * 9000)}`;
};

// Parent Component to manage multi-screen state
const AppointmentForm = () => {
  const [currentStep, setCurrentStep] = useState(1); // Step control (1 or 2)
  const [selectedDepartment, setDepartment] = useState(null);
  const [selectedDoctor, setDoctor] = useState(null);
  const [selectedSlot, setSlot] = useState(null);
  const [bookingId, setBookingId] = useState(""); // State for booking ID
  
  const apiUrl = "http://localhost:5000/appointments"; // JSON server endpoint for appointments
  
   // Fetch users on mount
   useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  //Hanle Submission of  selected Department, Doctor & Slots
  const handleSubmit = () => {
    const appointmentData = {
      departmentId: selectedDepartment,
      doctorId: selectedDoctor,
      slot: selectedSlot,
    };
    console.log("Seleceted Appointment Data:", appointmentData);
    // Send to backend (if needed)
    // axios.post('/api/appointments', appointmentData)
    //   .then(response => console.log(response))
    //   .catch(error => console.error(error));
  };

  const handleNext = () => {
    if (selectedDepartment && selectedDoctor && selectedSlot) {
      handleSubmit(); //Call submit function here
      setCurrentStep(2); //Proceed to the next step (Patient details)
    } else {
      alert("Please fill all fields before procceding");
    }
    currentStep === 1 && selectedDepartment && selectedDoctor && selectedSlot;
    {
      const newBookingId = generateBookingId();
      setBookingId(newBookingId); // Generate and set booking ID
      setCurrentStep(2); // Move to patient details screen
    }
  };

  const handleBack = () => {
    if (currentStep === 2) {
      setCurrentStep(1); // Back to department, doctor, and slot selection
    }
  };
//   axios
//   .post(apiUrl, newAppointment)
//   .then((response) => {
//     console.log("Appointment saved:", response.data);
//     // Clear form fields
//     setDepartment("");
//     setDoctor("");
//     setSlot("");
//   })
//   .catch((error) => console.error("Error saving appointment:", error));
// };

  return (
    <section className="py-10">
      {currentStep === 1 ? (
        <DepartmentDoctorSlotSelection
          selectedDepartment={selectedDepartment}
          setDepartment={setDepartment}
          selectedDoctor={selectedDoctor}
          setDoctor={setDoctor}
          selectedSlot={selectedSlot}
          setSlot={setSlot}
          handleNext={handleNext}
        />
      ) : (
        <PatientDetailsForm handleBack={handleBack} bookingId={bookingId} />
      )}
    </section>
  );
};

// SCREEN 1: Department, Doctor, and Slot Selection Component
const DepartmentDoctorSlotSelection = ({
  selectedDepartment,
  setDepartment,
  selectedDoctor,
  setDoctor,
  selectedSlot,
  setSlot,
  handleNext,
}) => {
  const department = departmentsData.departments.find(
    (dept) => dept.id === Number(selectedDepartment)
  );
  const doctor = department?.doctors.find(
    (doc) => doc.id === Number(selectedDoctor)
  );

  return (
    <section className="section">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-2 p-6">
        <h1 className="text-2xl font-medium text-center mb-6 bg-sky-500 py-4 rounded">
          Select Department, Doctor, and Slot
        </h1>
        <div className="grid grid-cols-1 gap-6">
          {/* Select Department */}
          <Select onValueChange={(value) => setDepartment(value)}>
            <SelectTrigger className="bg-white rounded-sm h-14 text-lg text-slate-500 border-2">
              <SelectValue placeholder="Select Department" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Department</SelectLabel>
                {departmentsData.departments.map((item) => (
                  <SelectItem key={item.id} value={String(item.id)}>
                    {item.name}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {/* Select Doctor */}
          {department && (
            <Select onValueChange={(value) => setDoctor(value)}>
              <SelectTrigger className="bg-white rounded-sm h-14 text-lg text-slate-500 border-2">
                <SelectValue placeholder="Select Doctor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Doctor</SelectLabel>
                  {department.doctors.map((doc) => (
                    <SelectItem key={doc.id} value={String(doc.id)}>
                      {doc.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}

          {/* Select Slot */}
          {doctor && (
            <Select onValueChange={(value) => setSlot(value)}>
              <SelectTrigger className="bg-white rounded-sm h-14 text-lg text-slate-500 border-2">
                <SelectValue placeholder="Select Slot" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Available Slots</SelectLabel>
                  {doctor.availableSlots.map((slot, index) => (
                    <SelectItem key={index} value={slot}>
                      {slot}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}

          <div className="text-center mt-8">
            <Button onClick={handleNext} disabled={!selectedSlot}>
              Next
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

//SCREEN 2 : PatientDetailsForm
interface PatientDetailsFormProps {
  handleBack: () => void;
  bookingId: string | number;
}

type User = {
  id: number;
  name: string;
  gender: string;
  dob: string;
  phone: number;
  email: string;
  state: string;
  city: string;
  address: string;
  pincode: number;
};

const PatientDetailsForm: React.FC<PatientDetailsFormProps> = ({
  handleBack,
  bookingId,
}) => {
  const [department, selectedDepartment] = useState("")
  const [doctor, selectedDoctor] = useState("")
  const [slot, selectedSlot] = useState("")
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState<Date | undefined>(undefined);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPinCode] = useState("");
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const apiUrl = "http://localhost:5000/users";

  // Fetch users on mount
  useEffect(() => {
    axios
      .get(apiUrl)
      .then((response) => setUsers(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Add new user
  const addUser = () => {
    if (
      name &&
      gender &&
      dob &&
      phone &&
      email &&
      state &&
      city &&
      address &&
      pincode
    ) {
      axios
        .post(apiUrl, {
          name,
          gender,
          dob: dob?.toISOString(),
          phone: Number(phone),
          email,
          state,
          city,
          address,
          pincode: Number(pincode),
        })
        .then((response) => {
          setUsers([...users, response.data]);
          clearForm();
        })
        .catch((error) => console.error("Error adding user:", error));
    }
  };

  // Delete user
  const deleteUser = (id: number) => {
    axios
      .delete(`${apiUrl}/${id}`)
      .then(() => setUsers(users.filter((user) => user.id !== id)))
      .catch((error) => console.error("Error deleting user:", error));
  };

  // Update user
  const updateUser = () => {
    if (
      editingUser &&
      name &&
      gender &&
      dob &&
      phone &&
      email &&
      state &&
      city &&
      address &&
      pincode
    ) {
      axios
        .put(`${apiUrl}/${editingUser.id}`, {
          name,
          gender,
          dob: dob?.toISOString(),
          phone: Number(phone),
          email,
          state,
          city,
          address,
          pincode: Number(pincode),
        })
        .then((response) => {
          setUsers(
            users.map((user) =>
              user.id === editingUser.id ? response.data : user
            )
          );
          setEditingUser(null);
          clearForm();
        })
        .catch((error) => console.error("Error updating user:", error));
    }
  };

  // Populate form for editing
  const editUser = (user: User) => {
    setEditingUser(user);
    setName(user.name);
    setGender(user.gender);
    setDob(new Date(user.dob));
    setPhone(String(user.phone));
    setEmail(user.email);
    setState(user.state);
    setCity(user.city);
    setAddress(user.address);
    setPinCode(String(user.pincode));
  };

  // Clear form
  const clearForm = () => {
    setName("");
    setGender("");
    setDob(undefined);
    setPhone("");
    setEmail("");
    setState("");
    setCity("");
    setAddress("");
    setPinCode("");
  };

  return (
    <section>
     
        {/* Form UI */}
       
        <ScrollArea>
        <div className="h-[500px]">
          <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto bg-white   shadow-lg rounded-lg mt-2 p-6">
            <p className="text-center text-xl">Booking ID: {bookingId}</p>

            <Input
              placeholder="Enter Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="bg-white rounded-sm h-14 text-lg px-3 border-2 "
            />

            <Select onValueChange={(value) => setGender(value)}>
              <SelectTrigger className="h-14 text-lg">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Gender</SelectLabel>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Other">Other</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal h-14",
                    !dob && "text-muted-foreground"
                  )}
                >
                  {dob ? format(dob, "PPP") : "Pick a Date of Birth"}
                  <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar mode="single" selected={dob} onSelect={setDob} />
              </PopoverContent>
            </Popover>

            <Input
              type="phone"
              placeholder="Enter Your Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="bg-white rounded-sm h-14 text-lg px-3 border-2"
            />

            <Input
              type="email"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-white rounded-sm h-14 text-lg px-3 border-2"
            />

            <Input
              placeholder="Enter Your State"
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="bg-white rounded-sm h-14 text-lg px-3 border-2"
            />

            <Input
              placeholder="Enter Your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="bg-white rounded-sm h-14 text-lg px-3 border-2"
            />

            <Textarea
              placeholder="Enter Your Address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-white rounded-sm h-14 text-lg px-3 border-2"
            />

            <Input
              placeholder="Enter Your Pin Code"
              value={pincode}
              onChange={(e) => setPinCode(e.target.value)}
              className="bg-white rounded-sm h-14 text-lg px-3 border-2"
            />
          </div>
          </div>
          </ScrollArea>

          {/* Other input fields for gender, dob, phone, etc. */}
          <div className="flex gap-8 p-4 justify-center">
            <Button onClick={handleBack}>Back</Button>
            <Button onClick={editingUser ? updateUser : addUser}>
              {editingUser ? "Update" : "Add"} Patient
            </Button>
          </div>
        
     
      {/* Display users */}
      {/* <div className="grid grid-flow-row  mx-24  p-8">
        <h2 className="text-3xl font-mono">Patients List:-</h2>
        <Table>
          <TableCaption>You identified by your unique Patient ID</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Patient ID</TableHead>
              <TableHead>Patient's Name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>DOB</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Mail</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="p-2">
                <TableCell className="font-medium"> {user.id}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell> {user.gender}</TableCell>
                <TableCell> {user.dob}</TableCell>
                <TableCell> {user.phone}</TableCell>
                <TableCell> {user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
          <div className="flex gap-4 my-4">
          <Button onClick={() => editUser(user)}>Edit</Button>
          <Button onClick={() => deleteUser(user.id)}>Delete</Button>
          </div>
        </Table>
         </div> */}
    </section>
  );
};

export default AppointmentForm;
function setUsers(data: any): any {
  throw new Error("Function not implemented.");
}

