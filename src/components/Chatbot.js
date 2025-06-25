import React, { useState, useEffect, useRef } from 'react';
import { ChatbotEngine } from '../utils/chatbotEngine';

const Chatbot = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [chatbotEngine] = useState(() => new ChatbotEngine());
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    // Initialize chatbot engine and load knowledge base
    const initChatbot = async () => {
      await chatbotEngine.loadKnowledgeBase();
      const welcomeMessage = chatbotEngine.getWelcomeMessage();
      setMessages([{
        id: 1,
        type: 'bot',
        text: welcomeMessage.answer,
        suggestions: welcomeMessage.suggestions,
        timestamp: new Date()
      }]);
    };

    initChatbot();
  }, [chatbotEngine]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = async (text = inputText) => {
    if (!text.trim()) return;

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: text.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay for better UX
    setTimeout(async () => {
      const response = chatbotEngine.findBestMatch(text.trim());
      
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: response.answer,
        details: response.details,
        suggestions: response.suggestions,
        confidence: response.confidence,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleSuggestionClick = (suggestion) => {
    handleSendMessage(suggestion);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp) => {
    return timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) return null;

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <div className="chatbot-header-info">
          <div className="chatbot-avatar">
            <i className="fa fa-robot"></i>
          </div>
          <div className="chatbot-title">
            <h4>JashGPT</h4>
            <span className="chatbot-status">Online</span>
          </div>
        </div>
        <button className="chatbot-close" onClick={onClose}>
          <i className="fa fa-times"></i>
        </button>
      </div>

      <div className="chatbot-messages">
        {messages.map((message) => (
          <div key={message.id} className={`message ${message.type}`}>
            <div className="message-content">
              <div className="message-text">
                {message.text}
              </div>
              {message.details && (
                <div className="message-details">
                  <small>{message.details}</small>
                </div>
              )}
              <div className="message-time">
                {formatTime(message.timestamp)}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="message bot">
            <div className="message-content">
              <div className="typing-indicator">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        )}

        {/* Show suggestions for the last bot message */}
        {messages.length > 0 && 
         messages[messages.length - 1].type === 'bot' && 
         messages[messages.length - 1].suggestions && 
         !isTyping && (
          <div className="suggestions">
            <div className="suggestions-title">Quick questions:</div>
            {messages[messages.length - 1].suggestions.map((suggestion, index) => (
              <button
                key={index}
                className="suggestion-chip"
                onClick={() => handleSuggestionClick(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      <div className="chatbot-input">
        <div className="input-container">
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Ask anything about Jashwanth..."
            className="message-input"
          />
          <button
            onClick={() => handleSendMessage()}
            disabled={!inputText.trim()}
            className="send-button"
          >
            <i className="fa fa-paper-plane"></i>
          </button>
        </div>
        <div className="input-footer">
          <small>Powered by <a href="https://en.wikipedia.org/wiki/Similarity_search" target='_blank'>similarity search</a> • No data stored</small>
        </div>
      </div>
    </div>
  );
};

export default Chatbot; 