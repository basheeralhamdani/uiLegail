import React, { useState, useEffect } from 'react';
import NewMatterModal from '../components/features/case/NewMatterModal';
import { getMatters, initializeMatters } from '../api/matters';
import QuickStats from '../components/features/dashboard/QuickStats';
import MatterCard from '../components/features/dashboard/MatterCard';

const DashboardPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [matters, setMatters] = useState([]);

  useEffect(() => {
    initializeMatters();
    setMatters(getMatters());
  }, []);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setMatters(getMatters());
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h2>
        <button
          id="new-matter-btn"
          onClick={openModal}
          className="flex items-center bg-primary-color hover:bg-primary-color-hover text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-200"
        >
          <svg
            className="h-5 w-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          New Matter
        </button>
      </div>

      <QuickStats matters={matters} />

      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        Client Matters
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {matters.map(matter => (
          <MatterCard key={matter.id} matter={matter} />
        ))}
      </div>

      <NewMatterModal showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default DashboardPage;
