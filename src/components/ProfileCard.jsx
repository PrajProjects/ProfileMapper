import React from "react";
import { Link } from "react-router-dom";


const ProfileCard = ({ profile, onSummary }) => {
  
  return (
    <div className="profile-card border p-4 rounded-lg shadow-md">
      <div className="flex justify-center mb-4">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-32 h-32 rounded-full object-cover"
        />
      </div>
      <h3 className="text-sm font-bold text-center">{profile.name}</h3>
      <p className="text-center">{profile.description}</p>
      <div className="flex justify-center gap-4 mt-2">
        <button
          onClick={() => onSummary(profile)} 
          className="bg-[#003049] text-white px-4 py-2 rounded w-24"
        >
          Summary
        </button>
        
        <Link
          to={`/profile/${profile.id}`}
          className="bg-[#003049] text-white px-4 py-2 rounded w-24 text-center inline-block"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProfileCard;
