import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatter, updateMatter } from '../api/matters';
import DocumentViewer from '../components/features/casereview/DocumentViewer';
import ChatHistory from '../components/features/casereview/ChatHistory';

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
    return <div className="text-center p-8">Loading...</div>;
  }

  const document = {
    title: matter.documentType,
    content: matter.drafting ? matter.drafting.finalDocument : 'No final document available.',
  };

  return (
    <>
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Review Case: {matter.clientName}
        </h2>
        <div className="flex gap-4">
          <button
            onClick={handleReopen}
            className="bg-primary-color hover:bg-primary-color-hover text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
          >
            Re-open for Drafting
          </button>
          <button
            onClick={handleSendForSignature}
            className="bg-accent-color hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-200"
            disabled={matter.status === 'Pending Signature'}
          >
            {matter.status === 'Pending Signature' ? 'Signature Pending' : 'Send for Signature'}
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <DocumentViewer document={document} />
        </div>
        <div className="space-y-8">
          <ChatHistory title="AI Canvas Chat History" history={matter.drafting?.chatHistory} />
          <ChatHistory title="AI Call Transcript" history={matter.transcript} />
        </div>
      </div>
    </>
  );
};

export default CaseReviewPage;
