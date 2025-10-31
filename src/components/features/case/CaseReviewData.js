import React from 'react';

const CaseReviewData = () => {
  return (
    <div class="bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg max-w-4xl mx-auto">
        <div class="flex items-center mb-6 pb-4 border-b border-gray-200 dark:border-gray-700"><svg class="w-6 h-6 text-green-500 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg><h3 class="font-semibold text-lg text-gray-900 dark:text-white">Client Submitted Data - Verified</h3></div>
        <form class="space-y-8" id="case-review-form">
            <fieldset><legend class="text-xl font-semibold leading-6 text-gray-900 dark:text-gray-100 mb-4">Grantor Information</legend><div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6"><div class="sm:col-span-6"><label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Full Legal Name</label><input type="text" value="John B. Grantor" readonly class="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 p-2" /></div><div class="sm:col-span-6"><label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Complete Mailing Address</label><input type="text" value="456 Oak Avenue, Pleasantville, MI 48001" readonly class="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 p-2" /></div></div></fieldset>
            <fieldset><legend class="text-xl font-semibold leading-6 text-gray-900 dark:text-gray-100 mb-4">Grantee Information</legend><div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6"><div class="sm:col-span-6"><label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Full Legal Name</label><input type="text" value="Jane A. Grantee" readonly class="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 p-2" /></div><div class="sm:col-span-6"><label class="block text-sm font-medium text-gray-500 dark:text-gray-400">Complete Mailing Address</label><input type="text" value="789 Pine Street, Pleasantville, MI 48002" readonly class="mt-1 block w-full rounded-md bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 p-2" /></div></div></fieldset>
            <div class="pt-6 flex justify-end">
                <button type="submit" class="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">Data Confirmed, Proceed to Drafting</button>
            </div>
        </form>
    </div>
  );
};

export default CaseReviewData;
