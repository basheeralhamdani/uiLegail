import React from 'react';

const ChatBubble = ({ item }) => {
  const isAi = item.speaker === 'AI' || item.speaker === 'AI Agent';
  const bubbleClasses = isAi
    ? 'bg-gray-200 dark:bg-gray-700 self-start'
    : 'bg-primary-color text-white self-end';
  const speakerClasses = isAi ? 'text-blue-500' : 'text-green-400';

  return (
    <div className={`rounded-lg p-3 max-w-md ${bubbleClasses}`}>
      <p className="text-sm">{item.text}</p>
      <p className={`text-xs mt-1 font-semibold ${isAi ? 'text-left' : 'text-right'}`}>
        <span className={speakerClasses}>{item.speaker}</span>
      </p>
    </div>
  );
};

const ChatHistory = ({ title, history }) => {
  if (!history || history.length === 0) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
      <h3 className="font-semibold text-lg mb-4 text-gray-900 dark:text-white">{title}</h3>
      <div className="h-64 overflow-y-auto p-4 bg-gray-50 dark:bg-gray-900 rounded-md flex flex-col space-y-4">
        {history.map((item, index) => (
          <ChatBubble key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
