import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatter, updateMatter } from '../../../api/matters';
import LadyBirdDeedIntake from './LadyBirdDeedIntake';
import FullTrustIntake from './FullTruseIntake';

const ClientIntake = () => {
  const { matterId } = useParams();
  const navigate = useNavigate();
  const [matter, setMatter] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const currentMatter = getMatter(matterId);
    if (currentMatter) {
      setMatter(currentMatter);
      setFormData(currentMatter.data || {});
    }
  }, [matterId]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prevData => ({ ...prevData, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateMatter(matterId, {
      status: 'Ready to Draft',
      data: formData,
      lastActivity: 'Client submitted intake'
    });
    setIsSubmitted(true);
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };

  const handleSendEmail = () => {
    // Simulate sending an email
    const clientIntakeUrl = `${window.location.origin}/client-intake/${matterId}`;
    alert(`An email has been sent to the client with the following link to submit the form: ${clientIntakeUrl}` );
    updateMatter(matterId, {
      ...matter,
      status: 'Pending Client Submission',
    });
    setMatter({ ...matter, status: 'Pending Client Submission' });
  };

  if (!matter) {
    return <div>Loading...</div>;
  }

  const renderForm = () => {
    if (matter.documentType === 'Full Trust') {
      return <FullTrustIntake formData={formData} handleChange={handleChange} />;
    }
    return <LadyBirdDeedIntake formData={formData} handleChange={handleChange} />;
  };

  return (
    <div className="w-full mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg px-8">
      <header className="bg-gray-100 dark:bg-gray-700 px-8 py-6 rounded-t-lg flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">LexiFlow</h1>
          <p className="text-gray-600 dark:text-gray-300">Secure Intake: {matter.documentType}</p>
        </div>
      </header>

      {!isSubmitted ? (
        <div className="p-8" id="client-intake-form">
            <form onSubmit={handleSubmit}>
              {renderForm()}
              <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700">
                <div className="flex justify-end gap-4">
                  <button type="button" onClick={handleSendEmail} className="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-green-600 py-3 px-12 text-lg font-semibold text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                    Send to Client
                  </button>
                  <button type="submit" className="w-full sm:w-auto inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-12 text-lg font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" disabled={matter.status !== 'Pending Client Submission'}>
                    Verify & Submit
                  </button>
                </div>
              </div>
            </form>
        </div>
      ) : (
        <div id="success-message" className="text-center p-12">
          <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Submission Confirmed!</h3>
          <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">Your information has been securely submitted. Your attorney will now draft the necessary documents.</p>
          <p className="mt-6 text-md text-gray-500 dark:text-gray-500">You will be redirected shortly.</p>
        </div>
      )}
    </div>
  );
};

export default ClientIntake;
