import React from 'react';

const Templates = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Document Templates</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Lady Bird Deed</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Enhanced life estate deed to avoid probate for Michigan real estate.</p>
        </div>
        <div className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Will</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Designates beneficiaries and executor for an estate.</p>
        </div>
        <div className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Power of Attorney</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Appoints an agent to handle financial and legal matters.</p>
        </div>
        <div className="block p-6 bg-white dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Healthcare Directive</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Specifies medical treatment preferences.</p>
        </div>
      </div>
    </>
  );
};

export default Templates;
