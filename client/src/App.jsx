import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import LeadsPage from './pages/LeadsPage'



const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">
         Lead Management Module
      </h1>
      <LeadsPage />
    </div>
  );
}

export default App