import React from 'react';

const Clients = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Clients</h2>
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
        <table className="w-full text-left">
          <thead className="bg-gray-50 dark:bg-gray-800">
            <tr className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
              <th className="px-6 py-3">Client Name</th>
              <th className="px-6 py-3">Current Matter</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Last Activity</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Eleanor Vance</td>
              <td className="px-6 py-4">Lady Bird Deed</td>
              <td className="px-6 py-4">
                <span className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Awaiting Attorney Review
                </span>
              </td>
              <td className="px-6 py-4">15 mins ago</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">John B. Grantor</td>
              <td className="px-6 py-4">Lady Bird Deed</td>
              <td className="px-6 py-4">
                <span className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Awaiting Client
                </span>
              </td>
              <td className="px-6 py-4">2 hours ago</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Mary Testator</td>
              <td className="px-6 py-4">Will</td>
              <td className="px-6 py-4">
                <span className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Ready to Draft
                </span>
              </td>
              <td className="px-6 py-4">Yesterday</td>
            </tr>
            <tr className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">Peter Principal</td>
              <td className="px-6 py-4">Power of Attorney</td>
              <td className="px-6 py-4">
                <span className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  Completed
                </span>
              </td>
              <td className="px-6 py-4">3 days ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Clients;
