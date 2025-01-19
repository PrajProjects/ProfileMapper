

import React, { useState } from "react";
import { useProfiles } from "../contexts/ProfileContext"; // Import the context
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/Foot";

const AdminPanel = () => {
  const { profiles, deleteProfile } = useProfiles(); // Access the context values
  const [searchQuery, setSearchQuery] = useState("");

  // Filter profiles based on the search query (by name or location)
  const filteredProfiles = profiles.filter((profile) => {
    const name = profile.name || "";
    const location = profile.address || "";

    return (
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <>
      <div className="container mx-auto p-4">
        <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <h1 className="text-2xl font-bold text-center mb-4 mt-4">
          Admin Panel
        </h1>
        <Link
          className="bg-[#EC8305] text-white px-4 py-2 rounded w-24 mb-6 flex justify-center"
          to="/add"
        >
          Add (+)
        </Link>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-500 rounded-md shadow">
            <thead>
              <tr className="bg-[#003049] border-b">
                <th className="px-6 py-3 text-left text-sm font-medium text-white">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-white">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-white">
                  Description
                </th>
                <th className="px-6 py-3 text-left text-sm font-medium text-white">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredProfiles.map((profile) => (
                <tr
                  key={profile.id}
                  className="border-b hover:bg-gray-100 transition-colors"
                >
                  <td className="px-6 py-3 text-sm text-gray-700 whitespace-nowrap">
                    {profile.name}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700 whitespace-nowrap">
                    {profile.contact}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700">
                    {profile.description}
                  </td>
                  <td className="px-6 py-3 text-sm text-gray-700">
                    <div className="flex flex-wrap gap-2 justify-center">
                      <Link
                        className="bg-green-500 text-white px-4 py-2 rounded w-24 text-center inline-block"
                        to={`/update/${profile.id}`}
                      >
                        Edit
                      </Link>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded w-24 text-center inline-block"
                        onClick={() => deleteProfile(profile.id)} // Call deleteProfile when clicked
                      >
                        Delete
                      </button>
                      <Link
                        to={`/profile/${profile.id}`}
                        className="bg-[#003049] text-white px-4 py-2 rounded w-24 text-center inline-block"
                      >
                        Details
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AdminPanel;
