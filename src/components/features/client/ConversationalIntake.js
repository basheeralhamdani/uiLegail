
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatter, updateMatter } from '../../../api/matters';

const ConversationalIntake = () => {
  const { matterId } = useParams();
  const navigate = useNavigate();
  const [matter, setMatter] = useState(null);
  const [transcript, setTranscript] = useState([]);
  const [clientInput, setClientInput] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [collectedData, setCollectedData] = useState({});

  // Hardcoded questions for Lady Bird Deed
  const questions = [
    { key: 'grantorName', text: "Hello, this is the automated assistant for Doe & Associates Law. I'm calling to gather initial details for your Lady Bird Deed. Can you please state your full legal name as the property owner?" },
    { key: 'granteeName', text: 'Thank you. And who will be the grantee, the person receiving the property?' },
    { key: 'propertyAddress', text: 'Understood. What is the common street address of the property?' },
    { key: 'propertyCounty', text: 'What county is the property in?' },
    { key: 'taxParcelNumber', text: 'Can you provide the tax parcel number?' },
    { key: 'subdivisionName', text: 'What is the name of the subdivision?' },
    { key: 'legalDescription', text: 'Finally, please provide the full legal description of the property.' },
  ];

  useEffect(() => {
    const currentMatter = getMatter(matterId);
    if (currentMatter) {
      setMatter(currentMatter);
      // Start the conversation
      setTranscript([{ speaker: 'AI Agent', text: questions[0].text }]);
    }
  }, [matterId]);

  const handleInputChange = (e) => {
    setClientInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (!clientInput.trim()) return;

    const newTranscript = [...transcript, { speaker: 'Client', text: clientInput }];
    const questionKey = questions[currentQuestionIndex].key;
    const newCollectedData = { ...collectedData, [questionKey]: clientInput };

    setCollectedData(newCollectedData);
    setClientInput('');

    if (currentQuestionIndex < questions.length - 1) {
      const nextQuestion = questions[currentQuestionIndex + 1];
      setTranscript([...newTranscript, { speaker: 'AI Agent', text: nextQuestion.text }]);
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // End of conversation
      setTranscript([...newTranscript, { speaker: 'AI Agent', text: "Thank you. I have all the information I need. An attorney will review this and be in touch shortly." }]);
      updateMatter(matterId, {
        status: 'Awaiting Attorney Review',
        data: newCollectedData,
        transcript: newTranscript,
        lastActivity: 'Client submitted AI intake'
      });
      setTimeout(() => {
        navigate('/');
      }, 3000);
    }
  };

  if (!matter) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <header className="bg-gray-100 dark:bg-gray-700 px-8 py-6 rounded-t-lg">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">AI Intake</h1>
        <p className="text-gray-600 dark:text-gray-300">{matter.documentType}</p>
      </header>
      <div className="p-8" style={{ height: '400px', overflowY: 'auto' }}>
        {transcript.map((item, index) => (
          <div key={index} className={`flex ${item.speaker === 'AI Agent' ? 'justify-start' : 'justify-end'} mb-4`}>
            <div className={`rounded-lg px-4 py-2 ${item.speaker === 'AI Agent' ? 'bg-gray-200 dark:bg-gray-700' : 'bg-blue-500 text-white'}`}>
              {item.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-8 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-4">
          <input
            type="text"
            value={clientInput}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-md shadow-sm p-2"
            placeholder="Type your answer..."
          />
          <button onClick={handleSendMessage} className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg">
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationalIntake;
