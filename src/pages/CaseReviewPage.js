import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatter, updateMatter } from '../api/matters';

const CaseReviewPage = () => {
  const { matterId } = useParams();
  const navigate = useNavigate();
  const [matter, setMatter] = useState(null);

  useEffect(() => {
    const currentMatter = getMatter(matterId);
    if (currentMatter) {
      setMatter(currentMatter);
    }
  }, [matterId]);

  const handleReopen = () => {
    updateMatter(matterId, { status: 'Ready to Draft' });
    navigate(`/case-ai-canvas/${matterId}`);
  };

  const handleSendForSignature = () => {
    alert('The document has been sent to the client for signature.');
    updateMatter(matterId, { status: 'Pending Signature' });
    setMatter({ ...matter, status: 'Pending Signature' });
  };

  if (!matter) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Review Case: {matter.clientName}
        </h2>
        <div className="flex gap-4">
          <button
            onClick={handleReopen}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
          >
            Re-open for Drafting
          </button>
          <button
            onClick={handleSendForSignature}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
            disabled={matter.status === 'Pending Signature'}
          >
            {matter.status === 'Pending Signature' ? 'Signature Pending' : 'Send for Signature'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white dark:bg-gray-900 p-8 rounded-lg border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-6">{matter.documentType}</h2>
          <article
            className="prose prose-sm sm:prose-base dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
            dangerouslySetInnerHTML={{ __html: matter.drafting ? matter.drafting.finalDocument : 'No final document available.' }}
          />
        </div>
        <div className="space-y-8">
          {matter.drafting && (
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-4">AI Canvas Chat History</h3>
              <div className="h-48 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-sm space-y-3">
                {matter.drafting.chatHistory.map((item, index) => (
                  <p key={index}>
                    <strong className={item.speaker === 'AI' ? 'text-blue-500' : 'text-green-500'}>{item.speaker}:</strong> {item.text}
                  </p>
                ))}
              </div>
            </div>
          )}
          {matter.transcript && matter.transcript.length > 0 && (
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
              <h3 className="font-semibold text-lg mb-4">AI Call Transcript</h3>
              <div className="h-48 overflow-y-auto p-4 bg-gray-100 dark:bg-gray-800 rounded-md text-sm space-y-3">
                {matter.transcript.map((item, index) => (
                  <p key={index}>
                    <strong className={item.speaker === 'AI Agent' ? 'text-blue-500' : 'text-green-500'}>{item.speaker}:</strong> {item.text}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CaseReviewPage;
