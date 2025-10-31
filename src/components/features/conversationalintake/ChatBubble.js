import React from 'react';

const ChatBubble = ({ item }) => {
  const isAi = item.speaker === 'AI' || item.speaker === 'AI Agent';

  const avatarUrl = isAi
    ? 'https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg' // AI Avatar
    : 'https://i.pravatar.cc/150?u=client'; // Client Avatar

  return (
    <div className={`flex items-start gap-4 ${isAi ? 'justify-start' : 'justify-end'}`}>
      {isAi && <img src={avatarUrl} alt="AI Avatar" className="h-8 w-8 rounded-full" />}
      <div
        className={`rounded-lg p-3 max-w-md ${
          isAi ? 'bg-gray-200 dark:bg-gray-700' : 'bg-primary-color text-white'
        }`}
      >
        <p className="text-sm">{item.text}</p>
      </div>
      {!isAi && <img src={avatarUrl} alt="Client Avatar" className="h-8 w-8 rounded-full" />}
    </div>
  );
};

export default ChatBubble;
