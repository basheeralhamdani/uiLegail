import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatter, updateMatter } from '../../../api/matters';
import LadyBirdDeedIntake from './LadyBirdDeedIntake';
import FullTrustIntake from './FullTruseIntake';
import ProgressBar from '../clientintake/ProgressBar';
import Branding from '../clientintake/Branding';

const ClientIntake = () => {
  const { matterId } = useParams();
  const navigate = useNavigate();
  const [matter, setMatter] = useState(null);
  const [formData, setFormData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const steps = ['Introduction', 'Intake Form', 'Confirmation'];

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

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (!matter) {
    return <div className="text-center p-8">Loading...</div>;
  }

  const renderForm = () => {
    if (matter.documentType === 'Full Trust') {
      return <FullTrustIntake formData={formData} handleChange={handleChange} />;
    }
    return <LadyBirdDeedIntake formData={formData} handleChange={handleChange} />;
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg my-12">
      <div className="p-8">
        <Branding firmName={matter.firmName || 'Your Law Firm'} />
        <ProgressBar currentStep={currentStep} totalSteps={steps.length} />

        {!isSubmitted ? (
          <form onSubmit={handleSubmit}>
            {currentStep === 0 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Welcome</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  This secure portal will guide you through the process of providing the necessary information for your {matter.documentType}.
                </p>
              </div>
            )}

            {currentStep === 1 && renderForm()}

            {currentStep === 2 && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Confirmation</h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Please review your information before submitting.
                </p>
                {/* Add a summary of the entered data here */}
              </div>
            )}

            <div className="mt-10 pt-8 border-t border-gray-200 dark:border-gray-700 flex justify-between">
              {currentStep > 0 && (
                <button type="button" onClick={handlePrev} className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg">
                  Previous
                </button>
              )}
              {currentStep < steps.length - 1 && (
                <button type="button" onClick={handleNext} className="bg-primary-color hover:bg-primary-color-hover text-white font-bold py-2 px-4 rounded-lg ml-auto">
                  Next
                </button>
              )}
              {currentStep === steps.length - 1 && (
                <button type="submit" className="bg-accent-color hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg ml-auto">
                  Verify & Submit
                </button>
              )}
            </div>
          </form>
        ) : (
          <div className="text-center p-12">
            <svg className="mx-auto h-16 w-16 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">Submission Confirmed!</h3>
            <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">Your information has been securely submitted. Your attorney will now draft the necessary documents.</p>
            <p className="mt-6 text-md text-gray-500 dark:text-gray-500">You will be redirected shortly.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClientIntake;
