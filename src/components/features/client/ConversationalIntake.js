import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMatter, updateMatter } from '../../../api/matters';
import ChatBubble from '../conversationalintake/ChatBubble';
import Branding from '../clientintake/Branding';
import agentBridge from '../../../utils/agentBridge';

const ConversationalIntake = () => {
  const { matterId } = useParams();
  const navigate = useNavigate();
  const [matter, setMatter] = useState(null);
  const [transcript, setTranscript] = useState([]);
  const [clientInput, setClientInput] = useState('');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [collectedData, setCollectedData] = useState({});
  const [isTyping, setIsTyping] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [callState, setCallState] = useState('idle'); // idle | ringing | in-progress | ended
  const chatEndRef = useRef(null);

  const questions = [
    { key: 'grantorName', text: "Hello! I'm the automated assistant for Doe & Associates Law. I'll be gathering some initial details for your Lady Bird Deed. To start, could you please provide your full legal name as the property owner?" },
    { key: 'granteeName', text: 'Thank you. And who will be the grantee—the person receiving the property?' },
    { key: 'propertyAddress', text: 'Understood. What is the common street address of the property?' },
    { key: 'propertyCounty', text: 'Which county is the property located in?' },
    { key: 'taxParcelNumber', text: 'Great. Could you provide the tax parcel number?' },
    { key: 'subdivisionName', text: 'What is the name of the subdivision, if any?' },
    { key: 'legalDescription', text: 'Finally, please provide the full legal description of the property.' },
  ];

  useEffect(() => {
    const currentMatter = getMatter(matterId);
    if (currentMatter) setMatter(currentMatter);
  }, [matterId]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [transcript, isTyping]);

  const handleInputChange = (e) => {
    setClientInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (!clientInput.trim()) return;

    const newTranscript = [...transcript, { speaker: 'Client', text: clientInput }];
    const questionKey = questions[currentQuestionIndex].key;
    const newCollectedData = { ...collectedData, [questionKey]: clientInput };

    setTranscript(newTranscript);
    setCollectedData(newCollectedData);
    setClientInput('');
    setIsTyping(true);

    setTimeout(() => {
      if (currentQuestionIndex < questions.length - 1) {
        const nextQuestion = questions[currentQuestionIndex + 1];
        setTranscript(prev => [...prev, { speaker: 'AI Agent', text: nextQuestion.text }]);
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        const closingMessage = "Thank you. I have all the information I need. An attorney will review this and be in touch shortly.";
        setTranscript(prev => [...prev, { speaker: 'AI Agent', text: closingMessage }]);
        updateMatter(matterId, {
          status: 'Awaiting Attorney Review',
          data: newCollectedData,
          transcript: [...newTranscript, { speaker: 'AI Agent', text: closingMessage }],
          lastActivity: 'Client submitted AI intake'
        });
        setTimeout(() => navigate('/'), 3000);
      }
      setIsTyping(false);
    }, 1500);
  };

  // Handler to receive events from a caller agent (SDK or webhook proxy).
  // Payload example: { type: 'answer', questionKey: 'grantorName', text: 'John Doe' }
  const handleAgentEvent = (payload) => {
    if (!payload) return;
    if (payload.type === 'question') {
      setTranscript(prev => [...prev, { speaker: 'AI Agent', text: payload.text }]);
      return;
    }
    if (payload.type === 'answer') {
      const { questionKey, text } = payload;
      const newTranscript = [...transcript, { speaker: 'Client', text }];
      const newCollectedData = { ...collectedData, [questionKey]: text };
      setTranscript(prev => [...prev, { speaker: 'Client', text }]);
      setCollectedData(newCollectedData);

      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        const nextQuestion = questions[nextIndex];
        setTranscript(prev => [...prev, { speaker: 'AI Agent', text: nextQuestion.text }]);
        setCurrentQuestionIndex(nextIndex);
      } else {
        const closingMessage = "Thank you. I have all the information I need. An attorney will review this and be in touch shortly.";
        setTranscript(prev => [...prev, { speaker: 'AI Agent', text: closingMessage }]);
        updateMatter(matterId, {
          status: 'Awaiting Attorney Review',
          data: newCollectedData,
          transcript: [...transcript, { speaker: 'Client', text }, { speaker: 'AI Agent', text: closingMessage }],
          lastActivity: 'Client submitted AI intake via caller agent'
        });
        setTimeout(() => navigate('/'), 3000);
        setCallState('ended');
      }
    }
  };

  // Expose handler for development so a caller-agent SDK or manual test can invoke it.
  useEffect(() => {
    window.__legailHandleAgentEvent = handleAgentEvent;
    return () => { window.__legailHandleAgentEvent = undefined; };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [transcript, collectedData, currentQuestionIndex]);

  // Start agentBridge in development to receive mock-agent events automatically
  useEffect(() => {
    const stop = agentBridge.startAgentBridge(handleAgentEvent);
    return () => stop && stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startCall = () => {
    if (!consentGiven) {
      alert('Please provide consent before starting the call.');
      return;
    }
    setCallState('ringing');
    setTimeout(() => {
      setCallState('in-progress');
      // Start with first AI question
      setIsTyping(true);
      setTimeout(() => {
        setTranscript([{ speaker: 'AI Agent', text: questions[0].text }]);
        setIsTyping(false);
        setCurrentQuestionIndex(0);
      }, 1000);
    }, 1200);
  };

  // Local simulator for the caller agent (dev only) — will auto-answer using provided mockAnswers if given
  const simulateAgentCall = (mockAnswers = []) => {
    startCall();
    // schedule answers
    mockAnswers.forEach((ans, i) => {
      setTimeout(() => {
        handleAgentEvent({ type: 'answer', questionKey: questions[i].key, text: ans });
      }, 3000 * (i + 1));
    });
  };

  if (!matter) {
    return <div className="text-center p-8">Loading...</div>;
  }

  return (
    <div className="w-full max-w-2xl mx-auto bg-white dark:bg-gray-800 shadow-2xl rounded-lg my-12 flex flex-col h-[80vh]">
      <header className="bg-gray-100 dark:bg-gray-700 px-6 py-4 rounded-t-lg border-b dark:border-gray-600">
        <Branding firmName={matter.firmName || 'Your Law Firm'} />
        <p className="text-gray-600 dark:text-gray-300 text-sm -mt-6 ml-16">Secure Intake: {matter.documentType}</p>
      </header>
      <div className="px-6 py-4 border-b bg-gray-50 dark:bg-gray-800">
        {callState === 'idle' && (
          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={consentGiven} onChange={(e) => setConsentGiven(e.target.checked)} />
              <span className="text-sm">I consent to recording/transmitting audio for intake.</span>
            </label>
            <button onClick={startCall} className="ml-4 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded">Start Call</button>
            <button onClick={() => simulateAgentCall(['John Doe','Jane Smith','123 Main St','Wayne','A123','Sunnyvale','Lot 1'])} className="ml-2 bg-gray-300 hover:bg-gray-400 text-black px-3 py-2 rounded">Simulate Call (dev)</button>
          </div>
        )}
        {callState === 'ringing' && <div className="text-sm text-yellow-700">Call is ringing...</div>}
        {callState === 'in-progress' && <div className="text-sm text-green-700">Call in progress — collecting answers</div>}
        {callState === 'ended' && <div className="text-sm text-gray-600">Call ended. Thank you.</div>}
      </div>
      <div className="flex-1 p-6 space-y-6 overflow-y-auto">
        {transcript.map((item, index) => (
          <ChatBubble key={index} item={item} />
        ))}
        {isTyping && (
          <div className="flex items-start gap-4 justify-start">
            <img src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="AI Avatar" className="h-8 w-8 rounded-full" />
            <div className="rounded-lg p-3 bg-gray-200 dark:bg-gray-700 flex items-center">
              <div className="typing-indicator">
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        )}
        <div ref={chatEndRef} />
      </div>
      <div className="p-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex gap-4 items-center">
          <input
            type="text"
            value={clientInput}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded-full py-3 px-5 focus:outline-none focus:ring-2 focus:ring-primary-color"
            placeholder="Type your answer..."
            disabled={isTyping}
          />
          <button onClick={handleSendMessage} className="bg-primary-color hover:bg-primary-color-hover text-white font-bold py-3 px-5 rounded-full disabled:opacity-50" disabled={isTyping}>
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConversationalIntake;
