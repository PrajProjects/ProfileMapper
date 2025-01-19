import React from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useProfiles } from "../contexts/ProfileContext";

const ProfileDetails = () => {
  const { profiles } = useProfiles();
  const { id } = useParams();
  const profile = profiles.find((p) => p.id.toString() === id);

  if (!profile) return <div>Profile not found!</div>;

  return (
    <div className="flex justify-center items-center min-h-screen py-2 px-4 mt-2 bg-[#F4FFC3]">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xl lg:max-w-2xl border-2 border-gray-500">
        {/* Profile Name */}
        <h1 className="text-3xl font-bold text-center text-[#003049]">
          {profile.name}
        </h1>

        {/* Profile Photo */}
        <div className="flex justify-center mt-6">
          <img
            src={profile.photo}
            alt={profile.name}
            className="w-48 h-48 rounded-full object-cover"
          />
        </div>

        {/* Profile Details */}
        <div className="mt-6 space-y-4 text-gray-700 text-center">
          <p className="text-lg">{profile.description}</p>
          <p className="font-semibold">
            Address: <span className="font-normal">{profile.address}</span>
          </p>
          <p className="font-semibold">
            Contact: <span className="font-normal">{profile.contact}</span>
          </p>
          <p>
            <strong>Interests:</strong>{" "}
            {Array.isArray(profile.interests)
              ? profile.interests.join(", ")
              : "No interests provided"}
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-6 text-center">
          <Link
            to={`/`}
            className="bg-[#003049] text-white px-4 py-2 rounded w-28 text-center inline-block"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
