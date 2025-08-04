import React, { useEffect, useState } from "react";
import axios from "axios";
import { useIntern } from "../context/interncontext";

export default function Leaderboard() {
  const { intern } = useIntern();
  const [interns, setInterns] = useState([]);

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/leaderboard/")
      .then((res) => setInterns(res.data))
      .catch((err) => console.error("Error fetching leaderboard", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white p-8">
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
          🏆 Leaderboard
        </h1>
        {intern && (
          <p className="mt-2 text-md text-gray-300">
            Logged in as{" "}
            <span className="font-semibold text-blue-300">{intern.name}</span>{" "}
            (<span className="text-purple-300">{intern.email}</span>)
          </p>
        )}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full rounded-lg shadow-lg bg-gradient-to-tr from-[#1f2937] to-[#111827] backdrop-blur-md">
          <thead>
            <tr className="text-left text-sm text-gray-300 border-b border-gray-600">
              <th className="p-4">🏅 Rank</th>
              <th className="p-4">👤 Intern Name</th>
              <th className="p-4">📇 Referral Code</th>
              <th className="p-4">💰 Donations Raised</th>
            </tr>
          </thead>
          <tbody>
            {interns.map((i, index) => (
              <tr
                key={index}
                className={`border-b border-gray-700 hover:bg-gradient-to-r from-[#1e293b] to-[#0f172a] transition ${
                  index < 3 ? "text-yellow-300 font-bold" : "text-gray-200"
                }`}
              >
                <td className="p-4">{index + 1}</td>
                <td className="p-4">{i.name}</td>
                <td className="p-4">{i.referral_code}</td>
                <td className="p-4">₹{i.donations_raised}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
