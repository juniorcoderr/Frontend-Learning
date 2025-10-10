// useState with an Object of data - to handle the object data (means store multiple values in a single state variable - like name and age)

import { useState } from "react";

const Profile = () => {
  // Step 1: useState with an object
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  // Step 2: Handle input change for both name and age
  const handleChange = (e) => {
    const { name, value } = e.target; // to get input field name and value

    setProfile((prevProfile) => ({
      ...prevProfile, // copying old data
      [name]: value,
    }));
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>
      <div>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>

      {/* rendering the values on UI */}
      <h3>Profile Information</h3>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
};

export default Profile;
