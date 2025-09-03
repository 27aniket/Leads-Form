import React, { useState } from "react";
import axios from "axios";

const LeadForm = ({ onLeadAdded }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
    notes: "",
  });

  const [loading, setLoading] = useState(false);

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.email) {
      alert("Name and Email are required!");
      return;
      
       
    }
    

    try {
      setLoading(true);

      
      const res = await axios.post("/api/lead", form);

      
      onLeadAdded(res.data);

      // reset form
      setForm({ name: "", email: "", phone: "", source: "", notes: "" });
    } catch (err) {
      console.error("Error adding lead:", err);
      alert("Failed to add lead. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg shadow-blue-300 transition-shadow duration-300">
      <h2 className="text-xl font-semibold mb-4">➕ Add New Lead</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">
            Email
          </label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter email"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="tel"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder="Enter phone number"
          />
        </div>

        {/* Source */}
        <div>
          <label htmlFor="source" className="block text-sm font-medium mb-1">
            Source
          </label>
          <select
            id="source"
            name="source"
            value={form.source}
            onChange={handleChange}
            className="w-full border rounded-lg p-2 focus:ring-blue-200 "
          >
            <option value="">Select source</option>
            <option value="Website">Website</option>
            <option value="Referral">Referral</option>
            <option value="Social Media">Social Media</option>
          </select>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium mb-1">
            Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={form.notes}
            onChange={handleChange}
            rows="3"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-blue-200"
            placeholder="Additional notes..."
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
        >
          {loading ? "Saving..." : "Save Lead"}
        </button>
      </form>
    </div>
  );
};

export default LeadForm;
