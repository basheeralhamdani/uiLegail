import React from 'react';
import { Link } from 'react-router-dom';

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
      return `/case-review/${matter.id}`;
    case 'Awaiting Form Selection':
      return `/select-form/${matter.id}`;
    default:
      return `/client-intake/${matter.id}`;
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

const MatterCard = ({ matter }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {matter.clientName}
          </h3>
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${getStatusColor(matter.status)}`}>
            {matter.status}
          </span>
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-2">
          <span className="font-medium">Document:</span> {matter.documentType}
        </p>
        <p className="text-sm text-gray-400 dark:text-gray-500 mt-4">
          <span className="font-medium">Last Activity:</span> {matter.lastActivity}
        </p>
      </div>
      <Link
        to={getActionLink(matter)}
        className="mt-6 w-full text-center bg-primary-color hover:bg-primary-color-hover text-white font-bold py-2.5 px-4 rounded-lg transition-colors duration-200"
      >
        {getActionText(matter)}
      </Link>
    </div>
  );
};

export default MatterCard;
