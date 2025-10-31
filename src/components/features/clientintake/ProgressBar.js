import React from 'react';

const ProgressBar = ({ currentStep, totalSteps }) => {
  const percentage = ((currentStep + 1) / totalSteps) * 100;

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-8">
      <div
        className="bg-primary-color h-2.5 rounded-full transition-all duration-500"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
