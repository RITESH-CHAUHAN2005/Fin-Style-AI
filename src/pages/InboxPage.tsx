
import { useState, useEffect } from 'react';
import { 
  Search, Inbox, Users, BarChart2, Settings, 
  Star, CheckCircle, AlertCircle, Clock, Flag,
  MoreHorizontal, Send, Paperclip, ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Sample conversation data
const conversations = [
  {
    id: 1,
    name: 'Hailey Garza',
    email: 'hailey@example.com',
    company: 'Acme Inc.',
    location: 'San Jose, CA',
    subject: 'Hi, my credit card isn\'t working.',
    messages: [
      {
        id: 1,
        sender: 'Hailey Garza',
        content: 'Hi, my credit card isn\'t working.',
        time: '1h ago',
        isCustomer: true,
      },
      {
        id: 2,
        sender: 'You',
        content: 'I got an error when I try to add it.',
        time: '50m ago',
        isCustomer: true,
      },
      {
        id: 3,
        sender: 'Fin AI',
        content: 'Hi Hailey! Let me check if I can add it for you on my end.',
        time: '30m ago',
        isCustomer: false,
      },
    ],
    priority: 'high',
    status: 'open',
    time: '1h ago',
    avatar: 'H',
    color: 'bg-blue-500',
  },
  {
    id: 2,
    name: 'John Deen',
    email: 'john@example.com',
    company: 'TechCo',
    location: 'New York, NY',
    subject: 'I\'ll leave a special request.',
    messages: [
      {
        id: 1,
        sender: 'John Deen',
        content: 'I\'ll leave a special request.',
        time: '2h ago',
        isCustomer: true,
      },
      {
        id: 2,
        sender: 'Fin AI',
        content: 'Hi John, I\'d be happy to help with your special request. Could you provide more details?',
        time: '1h 45m ago',
        isCustomer: false,
      },
    ],
    priority: 'medium',
    status: 'open',
    time: '2h ago',
    avatar: 'J',
    color: 'bg-green-500',
  },
  {
    id: 3,
    name: 'Sarah Wong',
    email: 'sarah@example.com',
    company: 'DesignStudio',
    location: 'Toronto, CA',
    subject: 'I created a new page design',
    messages: [
      {
        id: 1, 
        sender: 'Sarah Wong',
        content: 'I created a new page design',
        time: '3h ago',
        isCustomer: true,
      },
      {
        id: 2,
        sender: 'Fin AI',
        content: 'That sounds great! Would you be able to share the design for review?',
        time: '2h 30m ago',
        isCustomer: false,
      },
    ],
    priority: 'low',
    status: 'open',
    time: '3h ago',
    avatar: 'S',
    color: 'bg-yellow-500',
  },
  {
    id: 4,
    name: 'Robin Benson',
    email: 'robin@example.com',
    company: 'GrowthInc',
    location: 'London, UK',
    subject: 'Could you point me to documentation?',
    messages: [
      {
        id: 1,
        sender: 'Robin Benson',
        content: 'Could you point me to documentation?',
        time: '5h ago',
        isCustomer: true,
      },
      {
        id: 2,
        sender: 'Fin AI',
        content: 'Absolutely! You can find our documentation at docs.finai.com. Is there a specific feature you\'re looking for?',
        time: '4h 30m ago',
        isCustomer: false,
      },
    ],
    priority: 'low',
    status: 'open',
    time: '5h ago',
    avatar: 'R',
    color: 'bg-purple-500',
  }
];

const InboxPage = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim() === '') return;
    
    // In a real application, you'd send this to an API
    console.log('Sending message:', newMessage);
    
    // For demo purposes, add to the conversation
    const updatedConversations = conversations.map(conv => {
      if (conv.id === selectedConversation.id) {
        const newMsg = {
          id: conv.messages.length + 1,
          sender: 'Fin AI',
          content: newMessage,
          time: 'Just now',
          isCustomer: false,
        };
        return {
          ...conv,
          messages: [...conv.messages, newMsg],
        };
      }
      return conv;
    });
    
    // Update the selected conversation with the new message
    const updatedSelectedConversation = updatedConversations.find(
      conv => conv.id === selectedConversation.id
    );
    
    if (updatedSelectedConversation) {
      setSelectedConversation(updatedSelectedConversation);
    }
    
    setNewMessage('');
  };

  // Priority color mapping
  const priorityColors = {
    high: 'text-red-500',
    medium: 'text-yellow-500',
    low: 'text-green-500',
  };

  return (
    <div className="min-h-screen bg-fin-beige pt-16">
      <div className="h-[calc(100vh-64px)] flex flex-col md:flex-row">
        {/* Sidebar */}
        <aside className="w-full md:w-64 lg:w-72 bg-white border-r border-gray-200 flex flex-col">
          {/* Mobile menu toggle */}
          <div className="md:hidden p-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="font-medium">Inbox</h2>
            <button 
              className="p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <ChevronDown size={20} /> : <ChevronDown size={20} />}
            </button>
          </div>
          
          {/* Sidebar content - always visible on desktop, toggleable on mobile */}
          <div className={`flex-1 flex flex-col overflow-hidden ${isMobileMenuOpen ? 'block' : 'hidden md:flex'}`}>
            {/* Navigation */}
            <div className="p-3 border-b border-gray-200">
              <nav className="space-y-1">
                <a href="#" className="nav-item active">
                  <Inbox size={20} />
                  <span>Inbox</span>
                </a>
                <a href="#" className="nav-item">
                  <Users size={20} />
                  <span>Customers</span>
                </a>
                <a href="/dashboard" className="nav-item">
                  <BarChart2 size={20} />
                  <span>Reports</span>
                </a>
                <a href="#" className="nav-item">
                  <Settings size={20} />
                  <span>Settings</span>
                </a>
              </nav>
            </div>
            
            {/* Search */}
            <div className="p-3 border-b border-gray-200">
              <div className="relative">
                <input 
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-fin-orange/20 focus:border-fin-orange/30 transition-all"
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              </div>
            </div>
            
            {/* Inbox tabs */}
            <div className="p-3 border-b border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-medium">VIP Inbox</h3>
                <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full">8</span>
              </div>
              <div className="flex space-x-2">
                <button className="text-xs bg-fin-orange text-white px-2 py-0.5 rounded-full">
                  Open
                </button>
                <button className="text-xs text-gray-500 hover:bg-gray-100 px-2 py-0.5 rounded-full transition-colors">
                  Priority first
                </button>
              </div>
            </div>
            
            {/* Conversation list */}
            <div className="flex-1 overflow-y-auto">
              <div className="divide-y divide-gray-100">
                {conversations.map((conversation) => (
                  <button
                    key={conversation.id}
                    onClick={() => setSelectedConversation(conversation)}
                    className={`w-full text-left p-3 hover:bg-fin-light-beige transition-colors ${selectedConversation.id === conversation.id ? 'bg-fin-light-beige' : ''}`}
                  >
                    <div className="flex items-start gap-3">
                      <div className={`w-8 h-8 rounded-full ${conversation.color} flex items-center justify-center text-white flex-shrink-0 font-medium`}>
                        {conversation.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium truncate">{conversation.name}</h4>
                          <span className="text-xs text-gray-500">{conversation.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{conversation.subject}</p>
                        <div className="flex items-center gap-2 mt-1">
                          {conversation.priority === 'high' && (
                            <span className="text-xs bg-red-100 text-red-600 px-1.5 rounded-full">Urgent</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </aside>
        
        {/* Main content - Conversation */}
        <main className="flex-1 flex flex-col bg-white">
          {selectedConversation ? (
            <>
              {/* Conversation header */}
              <header className="p-4 border-b border-gray-200 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full ${selectedConversation.color} flex items-center justify-center text-white flex-shrink-0 font-medium`}>
                    {selectedConversation.avatar}
                  </div>
                  <div>
                    <h2 className="font-medium">{selectedConversation.name}</h2>
                    <div className="text-sm text-gray-500">{selectedConversation.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-500 hover:bg-fin-light-beige rounded-full transition-colors">
                    <Star size={18} />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-fin-light-beige rounded-full transition-colors">
                    <CheckCircle size={18} />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-fin-light-beige rounded-full transition-colors">
                    <Flag size={18} />
                  </button>
                  <button className="p-2 text-gray-500 hover:bg-fin-light-beige rounded-full transition-colors">
                    <MoreHorizontal size={18} />
                  </button>
                </div>
              </header>
              
              {/* Conversation messages */}
              <div className="flex-1 overflow-y-auto p-4 bg-fin-beige">
                <div className="max-w-3xl mx-auto space-y-6">
                  {selectedConversation.messages.map((message) => (
                    <div key={message.id} className={`flex ${message.isCustomer ? 'justify-start' : 'justify-end'}`}>
                      {message.isCustomer && (
                        <div className="mr-3 flex-shrink-0">
                          <div className={`w-8 h-8 rounded-full ${selectedConversation.color} flex items-center justify-center text-white`}>
                            {selectedConversation.avatar}
                          </div>
                        </div>
                      )}
                      <div className={`max-w-sm chat-bubble ${message.isCustomer ? 'bot' : 'user'}`}>
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-medium text-sm">{message.sender}</span>
                          <span className="text-xs text-gray-500">{message.time}</span>
                        </div>
                        <p>{message.content}</p>
                      </div>
                      {!message.isCustomer && (
                        <div className="ml-3 flex-shrink-0">
                          <div className="w-8 h-8 rounded-full bg-fin-orange flex items-center justify-center text-white">
                            <span className="font-serif font-bold">F</span>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Reply form */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-end gap-3">
                  <div className="flex-1">
                    <textarea
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      placeholder="Type your reply..."
                      className="w-full p-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-fin-orange/20 focus:border-fin-orange/30 transition-all resize-none"
                      rows={3}
                    />
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600 rounded-full transition-colors">
                          <Paperclip size={18} />
                        </button>
                        <button className="text-xs text-gray-500 hover:bg-gray-100 px-2 py-0.5 rounded-full transition-colors">
                          Add note
                        </button>
                        <button className="text-xs text-gray-500 hover:bg-gray-100 px-2 py-0.5 rounded-full transition-colors">
                          Canned response
                        </button>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    disabled={newMessage.trim() === ''}
                    className={`p-3 rounded-full ${newMessage.trim() === '' ? 'bg-gray-200 text-gray-400' : 'bg-fin-orange text-white hover:bg-opacity-90'} transition-all flex-shrink-0`}
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </>
          ) : (
            // No conversation selected
            <div className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <Inbox size={48} className="text-gray-300 mx-auto mb-3" />
                <h3 className="text-xl font-medium mb-2">No conversation selected</h3>
                <p className="text-gray-500">Select a conversation from the list to view it.</p>
              </div>
            </div>
          )}
        </main>
        
        {/* Details sidebar */}
        <aside className="hidden lg:block w-72 xl:w-80 border-l border-gray-200 bg-white overflow-y-auto">
          <div className="p-4 border-b border-gray-200">
            <h3 className="font-medium">Details</h3>
          </div>
          
          {selectedConversation && (
            <div>
              {/* Status */}
              <div className="p-4 border-b border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Status</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full capitalize">
                    Open
                  </span>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Assignee</span>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-fin-orange flex items-center justify-center text-white">
                      <span className="text-xs font-medium">F</span>
                    </div>
                    <span className="text-sm">Fin AI</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-500">Team</span>
                  <span className="text-sm">
                    VIP Inbox
                  </span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Priority</span>
                  <span className={`text-sm ${priorityColors[selectedConversation.priority as keyof typeof priorityColors]}`}>
                    {selectedConversation.priority === 'high' ? 'High priority' : 
                     selectedConversation.priority === 'medium' ? 'Medium priority' : 'Not priority'}
                  </span>
                </div>
              </div>
              
              {/* Customer info */}
              <div className="p-4 border-b border-gray-200">
                <h4 className="font-medium mb-4">Customer data</h4>
                
                <div className="space-y-4">
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Name</div>
                    <div>{selectedConversation.name}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Company</div>
                    <div>{selectedConversation.company}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Location</div>
                    <div>{selectedConversation.location}</div>
                  </div>
                  
                  <div>
                    <div className="text-xs text-gray-500 mb-1">Email</div>
                    <div>{selectedConversation.email}</div>
                  </div>
                </div>
                
                <button className="mt-4 text-sm text-fin-orange hover:underline">
                  See all
                </button>
              </div>
              
              {/* Recent conversations */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">Recent conversations</h4>
                  <ChevronDown size={16} className="text-gray-400" />
                </div>
                
                <div className="space-y-3">
                  <div className="p-3 border border-gray-100 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Started 10 days ago</span>
                      <span className="text-xs bg-green-100 text-green-700 px-1.5 rounded-full">
                        Open
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      I got an error while trying to checkout with my credit card
                    </p>
                  </div>
                  
                  <div className="p-3 border border-gray-100 rounded-lg">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">Started 2 months ago</span>
                      <span className="text-xs bg-gray-100 text-gray-700 px-1.5 rounded-full">
                        Closed
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">
                      Thanks for your help!
                    </p>
                  </div>
                </div>
              </div>
              
              {/* User notes */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-medium">User notes</h4>
                  <span className="text-xs bg-gray-100 px-1.5 rounded-full">0</span>
                </div>
                
                <div className="bg-gray-50 border border-dashed border-gray-200 rounded-lg p-4 text-center">
                  <p className="text-sm text-gray-500">No notes added yet</p>
                </div>
              </div>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default InboxPage;
