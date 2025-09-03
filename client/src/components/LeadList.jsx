

import React, { useState } from "react";

const LeadList = ({ leads }) => {
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });

  // Sorting
  const sortedLeads = [...leads].sort((a, b) => {
    if (!sortConfig.key) return 0;

    let valueA = a[sortConfig.key];
    let valueB = b[sortConfig.key];

    if (sortConfig.key === "createdAt") {
      valueA = new Date(valueA);
      valueB = new Date(valueB);
    }

    if (valueA < valueB) return sortConfig.direction === "asc" ? -1 : 1;
    if (valueA > valueB) return sortConfig.direction === "asc" ? 1 : -1;
    return 0;
  });

  // Toggle sorting
  const handleSort = (key) => {
    setSortConfig((prev) => ({
      key,
      direction: prev.key === key && prev.direction === "asc" ? "desc" : "asc",
    }));
  };

  // Function to render sort icons
  const renderSortIcon = (key) => {
    if (sortConfig.key === key) {
      return sortConfig.direction === "asc" ? "▲" : "▼";
    }
    return "↕";
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md shadow-blue-300 hover:shadow-lg transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-2">📋 Lead List</h2>

      {leads.length === 0 ? (
        <p className="text-gray-500">No leads captured yet.</p>
      ) : (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2 border">No.</th>
              <th
                className="p-2 border cursor-pointer"
                onClick={() => handleSort("name")}
              >
                Name {renderSortIcon("name")}
              </th>
              <th
                className="p-2 border cursor-pointer"
                onClick={() => handleSort("email")}
              >
                Email {renderSortIcon("email")}
              </th>
              <th className="p-2 border">Phone</th>
              <th
                className="p-2 border cursor-pointer"
                onClick={() => handleSort("source")}
              >
                Source {renderSortIcon("source")}
              </th>
              <th
                className="p-2 border cursor-pointer"
                onClick={() => handleSort("createdAt")}
              >
                Created {renderSortIcon("createdAt")}
              </th>
            </tr>
          </thead>
          <tbody>
            {sortedLeads.map((lead, index) => (
              <tr key={lead._id || index} className="hover:bg-gray-50">
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{lead.name}</td>
                <td className="p-2 border">{lead.email}</td>
                <td className="p-2 border">{lead.phone}</td>
                <td className="p-2 border">{lead.source}</td>
                <td className="p-2 border">
                  {lead.createdAt
                    ? new Date(lead.createdAt).toLocaleDateString()
                    : "—"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default LeadList;


