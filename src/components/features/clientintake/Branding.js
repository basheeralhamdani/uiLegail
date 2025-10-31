import React from 'react';

const Branding = ({ firmName, logoUrl }) => {
  return (
    <div className="flex items-center mb-8">
      {logoUrl && <img src={logoUrl} alt={`${firmName} Logo`} className="h-12 w-12 mr-4" />}
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">{firmName}</h1>
    </div>
  );
};

Branding.defaultProps = {
  firmName: 'Legail',
  logoUrl: 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg', // Placeholder logo
};

export default Branding;
