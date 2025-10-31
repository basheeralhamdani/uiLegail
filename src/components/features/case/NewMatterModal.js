import React, { useState } from 'react';
import { createMatter } from '../../../api/matters';
import AICall from './AICall';

const NewMatterModal = ({ showModal, closeModal }) => {
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [intakeMethod, setIntakeMethod] = useState('ai');
  const [callInitiated, setCallInitiated] = useState(false);
  const [newMatterId, setNewMatterId] = useState(null);

  if (!showModal) {
    return null;
  }

  const handleCreateMatter = (e) => {
    e.preventDefault();
    const newMatterData = {
      clientName,
      documentType: 'Lady Bird Deed', // Hardcoded for now
      intakeMethod,
      status: intakeMethod === 'ai' ? 'Awaiting AI Call' : 'Awaiting Form Selection',
      source: intakeMethod === 'ai' ? 'AI Voice Agent Call' : 'Manual Entry',
      data: {},
      transcript: [],
    };
    const newMatter = createMatter(newMatterData);
    setNewMatterId(newMatter.id);

    if (intakeMethod === 'ai') {
      setCallInitiated(true);
    } else {
      closeModal();
    }
  };

  return (
    <div id="new-matter-modal" className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="fixed inset-0 bg-black/50 modal-bg" id="modal-bg-overlay" onClick={closeModal}></div>
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 z-10 w-full max-w-md modal-content transform scale-95" id="modal-content-box">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Start New Matter</h3>
          {callInitiated ? (
            <AICall matterId={newMatterId} closeModal={closeModal} />
          ) : (
            <form onSubmit={handleCreateMatter}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium">Client Full Name</label>
                  <input type="text" placeholder="e.g., Eleanor Vance" className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 rounded-md p-2" value={clientName} onChange={(e) => setClientName(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium">Client Phone Number</label>
                  <input type="tel" placeholder="e.g., (555) 123-4567" className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 rounded-md p-2" value={clientPhone} onChange={(e) => setClientPhone(e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium">Intake Method</label>
                  <select className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 rounded-md p-2" value={intakeMethod} onChange={(e) => setIntakeMethod(e.target.value)}>
                    <option value="ai">AI Call</option>
                    <option value="manual">Manual Entry</option>
                  </select>
                </div>
              </div>
              <div className="mt-8 flex justify-end space-x-3">
                <button type="button" id="cancel-btn" className="bg-gray-200 dark:bg-gray-600 font-bold py-2 px-4 rounded-lg" onClick={closeModal}>Cancel</button>
                <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                  {intakeMethod === 'ai' ? 'Initiate AI Call' : 'Create Matter'}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewMatterModal;
