import React, { useEffect, useState } from "react";
import LeadForm from "../components/LeadsForm";
import LeadList from "../components/LeadList";
import LeadSummary from "../components/LeadSummary"; 
import axios from "axios";

axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;

const LeadsPage = () => {
  const [leads, setLeads] = useState([]);

  // Fetch leads from backend
  const fetchLeads = async () => {
    try {
      const res = await axios.get("/api/lead");
      setLeads(res.data);
    } catch (err) {
      console.error("Error fetching leads:", err);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  // Add newly created lead to list
  const handleLeadAdded = async (newLead) => {
    try {
      const res = await axios.post("/api/lead", newLead);
      setLeads((prev) => [res.data, ...prev]);
    } catch (err) {
      console.error("Error adding lead:", err);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <LeadForm onLeadAdded={handleLeadAdded} />

      <div className="flex flex-col gap-6">
        <LeadList leads={leads} />
        <LeadSummary leads={leads} />
        
      </div>
    </div>
  );
};

export default LeadsPage;
