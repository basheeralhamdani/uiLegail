import React from 'react';

const TemplatePreviewModal = ({ template, onClose }) => {
  if (!template) {
    return null;
  }

  const { title, description, previewContent } = template;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="p-6 overflow-y-auto">
          <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
          <div className="prose dark:prose-invert max-w-none p-4 border border-gray-200 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900">
            <h4 className="font-bold text-lg mb-2">Document Preview</h4>
            <p>{previewContent || 'No preview available.'}</p>
          </div>
        </div>
        <div className="flex justify-end p-6 border-t border-gray-200 dark:border-gray-700">
          <button
            onClick={onClose}
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg mr-2"
          >
            Close
          </button>
          <button
            className="bg-primary-color hover:bg-primary-color-hover text-white font-bold py-2 px-4 rounded-lg"
          >
            Use This Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplatePreviewModal;
