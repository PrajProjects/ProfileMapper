import React, { useState } from "react";
import Nav from "../components/Nav";
import { useProfiles } from "../contexts/ProfileContext";; 

const ProfileForm = ({ onSubmit }) => {
  const { addProfile } = useProfiles();
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    contact: "",
    description: "",
    address: "",
    latitude: "",
    longitude: "",
    interests: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form data
    if (
      !formData.id ||
      !formData.name ||
      !formData.contact ||
      !formData.description ||
      !formData.address ||
      !formData.latitude ||
      !formData.longitude ||
      !formData.interests ||
      !formData.photo
    ) {
      alert("Please fill out all fields!");
      return;
    }

    addProfile(formData);


    setFormData({
      id: "",
      name: "",
      contact: "",
      description: "",
      address: "",
      latitude: "",
      longitude: "",
      interests: "",
      photo: "",
    });
  };

  return (
   <>
   <Nav/>
   <div className="bg-[#F4FFC3] min-h-screen flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Add Profile</h2>
        <div className="flex flex-col md:flex-row gap-6">
     
          <div className="flex-1">
            {/* ID */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="id"
              >
                ID
              </label>
              <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
              />
            </div>

            {/* Name */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
              />
            </div>

            {/* Contact */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="contact"
              >
                Contact
              </label>
              <input
                type="email"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
              />
            </div>

            {/* Description */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="photo"
              >
                Photo URL
              </label>
              <input
                type="text"
                id="photo"
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
              />
            </div>
          </div>

      
          <div className="flex-1">
            {/* Address */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="address"
              >
                Address
              </label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
              />
            </div>

            {/* Latitude */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="latitude"
              >
                Latitude
              </label>
              <input
                type="text"
                id="latitude"
                name="latitude"
                value={formData.latitude}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
              />
            </div>

            {/* Longitude */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2"
                htmlFor="longitude"
              >
                Longitude
              </label>
              <input
                type="text"
                id="longitude"
                name="longitude"
                value={formData.longitude}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
              />
            </div>

            {/* Interests */}
            <div className="mb-4">
              <label
                className="block text-gray-700 font-medium mb-2 "
                htmlFor="interests"
              >
                Array(form)
                Interests (comma-separated)
              </label>
              <input
                type="text"
                id="interests"
                name="interests"
                value={formData.interests}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-lg border-gray-400"
              />
            </div>

            {/* Photo */}
            
          </div>
        </div>
        <center>
        <button
          type="submit"
          className="w-32 bg-[#003049] text-white py-2 rounded-lg hover:bg-blue-700 transition flex  justify-center "
        >
          Submit
        </button>
        </center>
      </form>
    </div>
   </>
  );
};

export default ProfileForm;
