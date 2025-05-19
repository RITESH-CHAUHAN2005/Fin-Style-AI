
import React, { useState, useRef, useEffect } from 'react';
import { Send, Search, X, ChevronLeft } from 'lucide-react';

// Sample messages for demo
const initialMessages = [
  {
    type: 'bot',
    content: "Hello! I'm Fin, your AI-powered assistant. I can answer most of your questions. How can I help you today?"
  }
];

const ChatPage = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Sample responses for the demo
  const sampleResponses: Record<string, string> = {
    "help": "I'm here to help! You can ask me about our products, services, pricing, or anything else you need assistance with.",
    "pricing": "Our pricing plans start at $29/month for the Basic plan, $79/month for the Pro plan, and $199/month for the Enterprise plan. Each plan includes different features and support levels.",
    "features": "Fin AI offers a comprehensive suite of features including AI-powered responses, omnichannel support, analytics dashboard, custom integrations, and human handoff when needed.",
    "hello": "Hello there! How can I assist you today?",
    "hi": "Hi! What can I help you with today?",
    "who are you": "I'm Fin, an AI assistant designed to provide human-quality customer support. I can answer questions, help solve problems, and connect you with a human agent if needed.",
    "contact": "You can reach our support team at support@finai.com or call us at 1-800-555-0123, Monday to Friday, 9am to 5pm PST."
  };

  // Function to handle sending messages
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() === '') return;
    
    // Add user message
    const newUserMessage = {
      type: 'user',
      content: inputMessage
    };
    setMessages([...messages, newUserMessage]);
    setInputMessage('');
    setIsLoading(true);
    
    // Simulate bot response after a delay
    setTimeout(() => {
      let botResponse = "I'm not sure how to respond to that. Can you try rephrasing or ask me something else?";
      
      // Check for keywords in the input message
      for (const [keyword, response] of Object.entries(sampleResponses)) {
        if (inputMessage.toLowerCase().includes(keyword)) {
          botResponse = response;
          break;
        }
      }
      
      const newBotMessage = {
        type: 'bot',
        content: botResponse
      };
      
      setMessages((prevMessages) => [...prevMessages, newBotMessage]);
      setIsLoading(false);
    }, 1000);
  };

  // Scroll to bottom of messages when new ones are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#fdfcfb] to-[#e2d1c3] pt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Chat header */}
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="/" className="md:hidden p-2 rounded-full hover:bg-black/5 transition-colors">
                <ChevronLeft size={20} />
              </a>
              <h1 className="text-2xl font-serif font-medium">Chat with Fin AI</h1>
            </div>
            <button className="p-2 rounded-full hover:bg-black/5 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Chat container */}
          <div className="floating-card overflow-hidden">
            {/* Chat messages */}
            <div className="h-[calc(100vh-250px)] md:h-[600px] overflow-y-auto p-5">
              <div className="flex flex-col space-y-4">
                {messages.map((message, index) => (
                  <div key={index} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                    {message.type === 'bot' && index === 0 && (
                      <div className="mr-3 flex-shrink-0">
                        <div className="w-10 h-10 bg-fin-orange rounded-full flex items-center justify-center">
                          <span className="text-white font-serif font-bold">F</span>
                        </div>
                      </div>
                    )}
                    <div className={`chat-bubble ${message.type === 'user' ? 'user' : 'bot'} animate-fade-in`}
                         style={{animationDelay: `${0.1 * index}s`}}>
                      {message.type === 'bot' && index === 0 && (
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-medium">Fin</span>
                          <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">AI Agent</span>
                        </div>
                      )}
                      <p>{message.content}</p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="chat-bubble bot animate-pulse">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        <div className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{animationDelay: '0.4s'}}></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
            </div>

            {/* Chat input */}
            <div className="border-t border-gray-100 p-4">
              <form onSubmit={handleSendMessage} className="flex items-center gap-2">
                <div className="flex-grow relative">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="w-full px-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-fin-orange/20 focus:border-fin-orange/30 transition-all"
                  />
                  <button 
                    type="button"
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Search size={18} className="text-gray-400" />
                  </button>
                </div>
                <button 
                  type="submit"
                  disabled={inputMessage.trim() === ''}
                  className={`p-3 rounded-full ${inputMessage.trim() === '' ? 'bg-gray-200 text-gray-400' : 'bg-fin-orange text-white hover:bg-opacity-90'} transition-all`}
                >
                  <Send size={18} />
                </button>
              </form>
              <div className="mt-2 text-xs text-gray-500 text-center">
                Powered by Fin AI • Your data is secure and encrypted
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;
