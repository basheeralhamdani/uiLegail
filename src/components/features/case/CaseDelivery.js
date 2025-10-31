import React from 'react';

const CaseDelivery = () => {
  return (
    <div class="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700 shadow-lg">
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-6">Final Document Ready</h3>
        <div class="flex items-center p-4 bg-gray-100 dark:bg-gray-800 rounded-lg"><svg class="w-10 h-10 text-blue-500 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg><div><p class="font-medium text-gray-800 dark:text-gray-200">LadyBirdDeed_Grantor_Final.pdf</p><p class="text-sm text-gray-500 dark:text-gray-400">2 pages, 128 KB</p></div></div>
        <div class="mt-8 space-y-4"><h4 class="font-semibold text-gray-700 dark:text-gray-300">Export Options</h4><div class="flex space-x-4"><button class="flex-1 text-center bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 font-medium py-2 px-4 rounded-lg">Download .docx</button><button class="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg">Download .pdf</button></div></div>
        <div class="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8"><h4 class="font-semibold text-gray-700 dark:text-gray-300 mb-4">Share with Client</h4><label class="block text-sm font-medium text-gray-600 dark:text-gray-300">Client Email</label><input type="email" value="j.grantor@email.com" class="mt-1 block w-full bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2 mb-4" /><button class="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg">Send Final Document via Secure Email</button></div>
    </div>
  );
};

export default CaseDelivery;
