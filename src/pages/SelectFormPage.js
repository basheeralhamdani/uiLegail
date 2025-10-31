import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatter, updateMatter } from '../api/matters';

const SelectFormPage = () => {
  const { matterId } = useParams();
  const navigate = useNavigate();

  const handleSelectForm = (formType) => {
    updateMatter(matterId, { documentType: formType, status: 'Awaiting Manual Entry' });
    navigate(`/client-intake/${matterId}`);
  };

  return (
    <div className="w-full mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8 py-6">
      <h2 className="text-2xl font-bold mb-4">Select Form Type</h2>
      <div className="flex justify-center gap-4">
        <button onClick={() => handleSelectForm('Lady Bird Deed')} className="bg-blue-500 text-white px-6 py-2 rounded">Lady Bird Deed</button>
        <button onClick={() => handleSelectForm('Full Trust')} className="bg-gray-500 text-white px-6 py-2 rounded">Full Trust</button>
      </div>
    </div>
  );
};

export default SelectFormPage;
