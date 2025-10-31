import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatter, updateMatter } from '../../../api/matters';

const AICallReview = () => {
  const { matterId } = useParams();
  const navigate = useNavigate();
  const [matter, setMatter] = useState(null);
  const [formData, setFormData] = useState({ grantorName: '', granteeName: '', propertyAddress: '', propertyCounty: '' });
  const [transcript, setTranscript] = useState([]);

  useEffect(() => {
    const currentMatter = getMatter(matterId);
    if (currentMatter) {
      setMatter(currentMatter);
      setFormData(currentMatter.data);
      setTranscript(currentMatter.transcript);
    }
  }, [matterId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSendToClient = () => {
    updateMatter(matterId, { 
      status: 'Awaiting Client', 
      intakeFormSentAt: new Date().toISOString(),
      data: formData
    });
    navigate('/');
  };

  if (!matter) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Right: Intake Form */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-lg mb-4">Populated Intake Form</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Review, correct, and complete the data below before sending to the
          client for final verification.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Grantor Full Legal Name</label>
            <input
              type="text"
              name="grantorName"
              value={formData.grantorName}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Grantee Full Legal Name</label>
            <input
              type="text"
              name="granteeName"
              value={formData.granteeName}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Property Street Address</label>
            <input
              type="text"
              name="propertyAddress"
              value={formData.propertyAddress}
              onChange={handleChange}
              className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 rounded-md p-2"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Property County</label>
            <input
              type="text"
              name="propertyCounty"
              value={formData.propertyCounty}
              onChange={handleChange}
              placeholder="e.g., Oakland"
              className="mt-1 block w-full bg-gray-100 dark:bg-gray-700 rounded-md p-2"
            />
          </div>

          <div className="pt-4 flex justify-end space-x-4">
            <button type="button" onClick={handleSendToClient} className="bg-gray-600 hover:bg-gray-700 text-white font-bold py-2 px-6 rounded-lg">
              Send to Client for Review
            </button>
            <a id="proceed-to-drafting-link" href="/case-select-template" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
              Proceed to Drafting
            </a>
          </div>
        </form>
      </div>

      {/* Left: Transcript */}
      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="font-semibold text-lg mb-4">
          AI Call Transcript
        </h3>
        <div className="h-96 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-sm space-y-3">
          {transcript.map((item, index) => (
            <p key={index}>
              <strong className={item.speaker === 'AI Agent' ? 'text-blue-500' : 'text-green-500'}>{item.speaker}:</strong> {item.text}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AICallReview;
