import React from 'react';
import { useNavigate } from 'react-router-dom';

const CaseSelectTemplate = () => {
  const navigate = useNavigate();

  const handleSelectTemplate = (path) => {
    navigate(path);
  };

  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Select Document(s) to Generate</h2>
      <p className="text-gray-500 dark:text-gray-400 mb-8">
        The client's data will be used to populate the selected documents.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <button
          id="template-lady-bird-deed"
          onClick={() => handleSelectTemplate('/case-ai-canvas/3')}
          className="block p-6 bg-white dark:bg-gray-900 rounded-lg border-2 border-blue-500 shadow-xl relative text-left"
        >
          <span className="absolute top-2 right-2 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
            Selected
          </span>
          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Lady Bird Deed</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Enhanced life estate deed to avoid probate.
          </p>
        </button>

        <button
          id="template-full-trust"
          onClick={() => handleSelectTemplate('/case-ai-canvas/4')}
          className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Full Trust</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Manages and distributes assets according to the grantor's wishes.
          </p>
        </button>

        <button
          id="template-will"
          className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Will</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Designates beneficiaries and executor for an estate.
          </p>
        </button>

        <button
          id="template-power-of-attorney"
          className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Power of Attorney</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Appoints an agent to handle financial and legal matters.
          </p>
        </button>

        <button
          id="template-healthcare-directive"
          className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-blue-500 dark:hover:border-blue-500 transition-all text-left"
        >
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Healthcare Directive</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
            Specifies medical treatment preferences.
          </p>
        </button>
      </div>

      <div className="mt-12 flex justify-end">
        <button
          onClick={() => handleSelectTemplate('/case-ai-canvas/3')}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg text-lg"
        >
          AI Canvas
        </button>
      </div>
    </>
  );
};

export default CaseSelectTemplate;
