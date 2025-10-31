import React from 'react';

const LadyBirdDeedIntake = ({ formData, handleChange }) => {
  return (
    <form id="intake-form-element" className="space-y-10">
      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Grantor Information (Current Property Owner)</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="grantorName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Legal Name</label>
            <input type="text" id="grantorName" value={formData.grantorName} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="grantorAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Complete Mailing Address</label>
            <input type="text" id="grantorAddress" value={formData.grantorAddress} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Grantee Information (Person Receiving Property)</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="granteeName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Legal Name</label>
            <input type="text" id="granteeName" value={formData.granteeName} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="granteeAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Complete Mailing Address</label>
            <input type="text" id="granteeAddress" value={formData.granteeAddress} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Property Details</legend>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          <div className="md:col-span-4">
            <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Common Street Address</label>
            <input type="text" id="propertyAddress" value={formData.propertyAddress} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="propertyCounty" className="block text-sm font-medium text-gray-700 dark:text-gray-300">County</label>
            <input type="text" id="propertyCounty" value={formData.propertyCounty} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="md:col-span-3">
            <label htmlFor="taxParcelNumber" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Tax Parcel Number</label>
            <input type="text" id="taxParcelNumber" value={formData.taxParcelNumber} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="md:col-span-3">
            <label htmlFor="subdivisionName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Subdivision Name</label>
            <input type="text" id="subdivisionName" value={formData.subdivisionName} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div className="md:col-span-6">
            <label htmlFor="legalDescription" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Legal Description (as it appears on current deed)</label>
            <textarea id="legalDescription" rows="5" value={formData.legalDescription} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
          </div>
        </div>
      </fieldset>
    </form>
  );
};

export default LadyBirdDeedIntake;