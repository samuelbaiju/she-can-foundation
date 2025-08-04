import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dashboard() {
  const [intern, setIntern] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/intern/")
      .then((res) => setIntern(res.data))
      .catch(() => setError("Failed to fetch intern data."));
  }, []);

  if (error) return <p className="text-red-400">{error}</p>;
  if (!intern) return <p className="text-white">Loading dashboard...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center text-white font-sans px-4">
      <div className="bg-gray-900 bg-opacity-80 p-10 rounded-2xl shadow-2xl max-w-xl w-full backdrop-blur-md border border-gray-700">
        <h2 className="text-3xl font-bold mb-6">
          Welcome, <span className="text-blue-500">{intern.name}</span>
        </h2>

        <div className="space-y-4 mb-6">
          <p className="text-gray-300">
            <span className="font-semibold">Referral Code:</span> {intern.referral_code}
          </p>
          <p className="text-gray-300">
            <span className="font-semibold">Total Donations Raised:</span>{" "}
            <span className="text-green-400">₹{intern.donations_raised}</span>
          </p>
        </div>

        <h3 className="text-xl font-semibold mb-2">Rewards</h3>
        <ul className="list-disc pl-5 text-gray-300">
          {intern.rewards.map((reward, idx) => (
            <li key={idx}>{reward}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
