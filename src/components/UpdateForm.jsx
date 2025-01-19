import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useProfiles } from "../contexts/ProfileContext";
import Nav from "../components/Nav";

const UpdateForm = () => {
  const { id } = useParams(); // Get profile ID from URL
  const navigate = useNavigate(); // For navigation
  const { profiles, updateProfile } = useProfiles(); // Access context

  // Find the profile by ID and set initial values
  const profile = profiles.find((p) => p.id === parseInt(id));
  const [values, setValues] = useState(profile || { name: "", contact: "" });

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log("Updated Values:", values); 
    updateProfile(parseInt(id), values); 
    console.log("Form Submitted:", values);
    console.log("Profile Updated Successfully!");
    navigate("/adminpanel"); 
  };

  return (
    <>
    <Nav/>
    <div className="bg-[#F4FFC3]">
      <h1 className="text-4xl  text-center font-bold ">Update Profile</h1>
      <div className=" flex justify-center r min-h-screen p-4">
        <div className="w-full max-w-lg bg-white text-black p-6 rounded-lg shadow-lg border-2 border-black-300 h-96">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("Form Submitted"); 
              handleUpdate(e);
            }}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-lg font-medium text-gray-700">
                Name:
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter Name"
                value={values.name}
                onChange={(e) => setValues({ ...values, name: e.target.value })}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-medium text-gray-700">
                Email:
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter Email"
                value={values.contact}
                onChange={(e) => setValues({ ...values, contact: e.target.value })}
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <center>
            <button
              type="submit"
              className="w-24 py-3 bg-[#003049] hover:bg-blue-700 text-white font-bold rounded-lg focus:outline-none"
            >
              Update
            </button>
            </center>
          </form>
        </div>
      </div>
      </div>
      
    </>
  );
};

export default UpdateForm;
