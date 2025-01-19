import React, { createContext, useContext, useState, useEffect } from "react";
import { profiles as initialProfiles } from "../data/profiles"; 

const ProfileContext = createContext();

export const useProfiles = () => useContext(ProfileContext);

export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState(() => {
    
    const savedProfiles = localStorage.getItem("profiles");
    return savedProfiles ? JSON.parse(savedProfiles) : initialProfiles;
  });

  
  useEffect(() => {
    localStorage.setItem("profiles", JSON.stringify(profileData));
  }, [profileData]);

  // Function to delete a profile by ID
  const deleteProfile = (id) => {
    const updatedProfiles = profileData.filter((profile) => profile.id !== id);
    setProfileData(updatedProfiles);
  };

  // Function to update a profile
  const updateProfile = (id, updatedInfo) => {
    const updatedProfiles = profileData.map((profile) =>
      profile.id === id ? { ...profile, ...updatedInfo } : profile
    );
    setProfileData(updatedProfiles);
  };
 
  //Function to add the profile
  const addProfile = (newProfile) => {
    setProfileData((prevProfiles) => [...prevProfiles, newProfile]);
  };

  return (
    <ProfileContext.Provider
    value={{
      profiles: profileData,
      deleteProfile,
      updateProfile,
      addProfile, 
    }}
  >
    {children}
  </ProfileContext.Provider>
  );
};
