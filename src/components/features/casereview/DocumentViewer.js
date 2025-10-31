import React from 'react';

const DocumentViewer = ({ document }) => {
  const { title, content } = document;

  return (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-white">{title}</h2>
      <article
        className="prose prose-lg sm:prose-xl dark:prose-invert max-w-none text-gray-800 dark:text-gray-200"
        dangerouslySetInnerHTML={{ __html: content || 'No final document available.' }}
      />
    </div>
  );
};

export default DocumentViewer;
