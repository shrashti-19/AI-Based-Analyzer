import React,{useState,useEffect} from 'react';
import axios from 'axios';
const CandidateProfile = () => {
    const [profileData, setProfileData] = useState({
      name: "",
      email: "",
      phone: "",
      bio: "",
    });
    const [loading, setLoading] = useState(true);
    useEffect(() => {
      axios
        .get("https://api.example.com/profile")
        .then((response) => {
          setProfileData(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching profile data:", error);
          setLoading(false);
        });
    }, []);
  
    const handleChange = (e) => {
      setProfileData({ ...profileData, [e.target.name]: e.target.value });
    };
  
    const handleSave = () => {
      setLoading(true);
      axios
        .put("https://api.example.com/profile", profileData) // replace it with the real API
        .then((response) => {
          alert("Profile saved!");
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error saving profile data:", error);
          setLoading(false);
        });
    };
  
    if (loading) return <div>Loading...</div>;
  
    return (
      <div className="min-h-screen bg-gray-900 text-white p-8">
        <h2 className="text-2xl font-bold mb-4">Candidate Profile</h2>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={profileData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={profileData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Phone</label>
            <input
              type="tel"
              name="phone"
              value={profileData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold">Bio</label>
            <textarea
              name="bio"
              value={profileData.bio}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 mt-2 bg-gray-700 text-white rounded-md"
            ></textarea>
          </div>
          <button
            onClick={handleSave} //sends an API (GET/Profile) and populate the state with it
            className="mt-4 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600"
          >
            Save Profile
          </button>
        </div>
      </div>
    );
  };
  
  export default CandidateProfile;