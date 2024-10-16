"use client";
import React from "react";
import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// import opdTable from "@/json/opdTable";
import { Button } from "@/components/ui/button";
import axios from "axios";
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

  // const page = () => {
  return (
    <section>
     
      {/* Display users */}
      <div className="grid grid-flow-row  mx-24  p-8">
        <h2 className="text-3xl font-mono">Booked Patients List:-</h2>
        <Table>
          <TableCaption>
            Patients are identified by the unique Patient ID
          </TableCaption>
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
                {/* <Button onClick={() => editUser(user)}>Edit</Button> */}
                <Button onClick={() => deleteUser(user.id)}>Delete</Button>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
};

export default PatientDetailsForm;

function clearForm() {
    throw new Error("Function not implemented.");
}
// const mappedData = tableData.rows.map(row => ({
//     consultant: row.Consultant,
//     department: row.Department,
//     designation: row.Designation,
//     opdTiming: row.OPD_Timing,
//     days: row.Days
//   }));

//   console.log(mappedData);
