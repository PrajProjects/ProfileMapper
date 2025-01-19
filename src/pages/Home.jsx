

import React, { useState } from "react";
import { useProfiles } from "../contexts/ProfileContext"; // Access the profile context
import ProfileCard from "../components/ProfileCard";
import MapComponent from "../components/MapComponent";
import Nav from "../components/Nav";
import Footer from "../components/Foot";

const Home = () => {
  const { profiles } = useProfiles(); // Access the profiles from context
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  // Filter profiles based on the search query
  const filteredProfiles = profiles.filter((profile) =>
    profile.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="container mx-auto p-4">
        <Nav searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <div className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
            {filteredProfiles.length > 0 ? (
              filteredProfiles.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
                  onSummary={setSelectedProfile}
                />
              ))
            ) : (
              <div className="text-center">No profiles found</div>
            )}
          </div>
        </div>

        {selectedProfile && (
          <div className="mt-8">
            <center>
              <h2 className="text-2xl font-bold mb-2">
                Location for {selectedProfile.name}
              </h2>
            </center>
            <MapComponent
              center={{
                lat: parseFloat(selectedProfile.latitude),
                lng: parseFloat(selectedProfile.longitude),
              }}
            />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Home;
