import React from "react";

const LeadSummary = ({ leads }) => {
  // Group by source
  const sourceCount = leads.reduce((acc, lead) => {
    const src = lead.source || "Unknown";
    acc[src] = (acc[src] || 0) + 1;
    return acc;
  }, {});

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md shadow-blue-300 hover:shadow-lg transition-shadow duration-300 mb-6">
      <h2 className="text-xl font-semibold mb-4">📊 Leads Summary</h2>

      {leads.length > 0 ? (
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-100">
              <th className="p-2 border">Source</th>
              <th className="p-2 border">Total Leads</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(sourceCount).map(([source, count], index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="p-2 border">{source}</td>
                <td className="p-2 border">{count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-500">No leads captured yet.</p>
      )}
    </div>
  );
};

export default LeadSummary;
