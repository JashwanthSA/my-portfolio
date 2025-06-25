import React, { useState, useEffect, useRef } from 'react';
import Chatbot from './Chatbot';

const ChatbotToggle = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasNewMessage, setHasNewMessage] = useState(false);
  const chatbotRef = useRef(null);

  useEffect(() => {
    // Show notification dot after a delay to attract users
    const timer = setTimeout(() => {
      if (!isOpen) {
        setHasNewMessage(true);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    // Handle clicking outside to close chatbot
    const handleClickOutside = (event) => {
      if (chatbotRef.current && !chatbotRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
    setHasNewMessage(false);
  };

  const closeChatbot = () => {
    setIsOpen(false);
  };

  return (
    <div className="chatbot-widget" ref={chatbotRef}>
      {/* Chatbot Popup */}
      <Chatbot isOpen={isOpen} onClose={closeChatbot} />

      {/* Toggle Button */}
      <button
        className={`chatbot-toggle ${isOpen ? 'active' : ''}`}
        onClick={toggleChatbot}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        title={isOpen ? 'Close chat' : 'Ask me about Jashwanth!'}
      >
        {hasNewMessage && !isOpen && (
          <div className="notification-dot"></div>
        )}
        
        <div className="toggle-icon">
          {isOpen ? (
            <i className="fa fa-times"></i>
          ) : (
            <i className="fa fa-comments"></i>
          )}
        </div>
        
        {!isOpen && (
          <div className="toggle-tooltip">
            Ask me about Jashwanth!
          </div>
        )}
      </button>
    </div>
  );
};

export default ChatbotToggle; 