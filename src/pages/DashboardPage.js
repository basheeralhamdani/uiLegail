import React, { useState, useEffect } from 'react';
import NewMatterModal from '../components/features/case/NewMatterModal';
import { getMatters, initializeMatters } from '../api/matters';

const Dashboard = () => {
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

  const getStatusColor = (status) => {
    switch (status) {
      case 'Awaiting Client':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      case 'Completed':
        return 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300';
      case 'Ready to Draft':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    }
  };

  const getActionLink = (matter) => {
    switch (matter.status) {
      case 'Ready to Draft':
        return '/case-select-template';
      case 'Completed':
        return '/case-review/' + matter.id;
      case 'Awaiting Form Selection':
        return '/select-form/' + matter.id;
      default:
        return '/client-intake/' + matter.id;
    }
  };

  const getActionText = (matter) => {
    switch (matter.status) {
      case 'Ready to Draft':
        return 'Select Template & Draft';
      case 'Completed':
        return 'View History';
      case 'Awaiting Form Selection':
        return 'Select Form';
      default:
        return 'View Case';
    }
  };

  return (
    <>
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Client Matters
          </h2>
          <button
            id="new-matter-btn"
            onClick={openModal}
            className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            <svg
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor" >
              
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {matters.map(matter => (
            <div key={matter.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {matter.clientName}
                </h3>
                <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusColor(matter.status)}`}>
                  {matter.status}
                </span>
              </div>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Document: {matter.documentType}
              </p>
              <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
                Last Activity: {matter.lastActivity}
              </p>
              <a
                href={getActionLink(matter)}
                className="mt-6 inline-block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              >
                {getActionText(matter)}
              </a>
            </div>
          ))}
        </div>
      <NewMatterModal showModal={showModal} closeModal={closeModal} />
    </>
  );
};

export default Dashboard;
