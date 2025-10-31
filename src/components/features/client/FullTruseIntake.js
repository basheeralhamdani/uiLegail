import React from 'react';

const FullTrustIntake = ({ formData, handleChange }) => {
  return (
    <form id="intake-form-element" className="space-y-10">
      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Grantor Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="grantorName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Legal Name</label>
            <input id="grantorName" value={formData.grantorName || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="grantorAddress" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Mailing Address</label>
            <input id="grantorAddress" value={formData.grantorAddress || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
          <div>
            <label htmlFor="trustExecutionDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Date of Trust Execution</label>
            <input id="trustExecutionDate" type="date" value={formData.trustExecutionDate || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          </div>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Trust Identification</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input id="trustName" placeholder="Trust Name" value={formData.trustName || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          <input id="amendments" placeholder="Amendments (if any)" value={formData.amendments || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Family Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input id="maritalStatus" placeholder="Marital Status" value={formData.maritalStatus || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          <textarea id="children" rows="3" placeholder="Children Names & Birthdates" value={formData.children || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
          <textarea id="descendants" rows="3" placeholder="References to Descendants" value={formData.descendants || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Trustee Information</legend>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input id="initialTrustee" placeholder="Initial Trustee" value={formData.initialTrustee || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          <input id="successorTrustees" placeholder="Successor Trustees" value={formData.successorTrustees || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          <input id="coTrustees" placeholder="Co-Trustees" value={formData.coTrustees || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Beneficiary Information</legend>
        <textarea id="beneficiaries" rows="3" placeholder="Beneficiary Names" value={formData.beneficiaries || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
        <textarea id="shares" rows="2" placeholder="Shares or Percentages" value={formData.shares || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
        <textarea id="contingentBeneficiaries" rows="3" placeholder="Contingent Beneficiaries" value={formData.contingentBeneficiaries || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
        <textarea id="specialProvisions" rows="3" placeholder="Special Provisions" value={formData.specialProvisions || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Asset Details</legend>
        <textarea id="assets" rows="4" placeholder="List of Assets (Schedule A)" value={formData.assets || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
        <input id="initialFunding" placeholder="Initial Funding Amount" value={formData.initialFunding || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Powers and Legal Clauses</legend>
        <textarea id="reservedPowers" rows="3" placeholder="Reserved Powers" value={formData.reservedPowers || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
        <textarea id="incapacityDefinition" rows="3" placeholder="Definition of Incapacity" value={formData.incapacityDefinition || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
        <input id="taxId" placeholder="Tax ID (SSN)" value={formData.taxId || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
        <input id="governingLaw" placeholder="Governing Law (State)" value={formData.governingLaw || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
      </fieldset>

      <fieldset>
        <legend className="text-2xl font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-600 pb-2 mb-6">Execution & Notarization</legend>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <input id="executionDate" type="date" value={formData.executionDate || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          <input id="notaryName" placeholder="Notary Name" value={formData.notaryName || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          <input id="notaryExpiration" type="date" value={formData.notaryExpiration || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
          <input id="witnesses" placeholder="Witness Names (if any)" value={formData.witnesses || ''} onChange={handleChange} className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 p-3 focus:ring-blue-500 focus:border-blue-500" />
        </div>
      </fieldset>
    </form>
  );
};

export default FullTrustIntake;
