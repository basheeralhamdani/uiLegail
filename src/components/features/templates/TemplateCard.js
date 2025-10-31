import React from 'react';

const TemplateCard = ({ template, onPreview }) => {
  const { title, description, icon } = template;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700 flex flex-col justify-between text-center">
      <div className="flex justify-center mb-4 text-primary-color">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 mb-4 flex-grow">{description}</p>
      <button
        onClick={() => onPreview(template)}
        className="w-full text-center bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-text-color dark:text-text-color-dark font-bold py-2.5 px-4 rounded-lg transition-colors duration-200"
      >
        Preview
      </button>
    </div>
  );
};

export default TemplateCard;
