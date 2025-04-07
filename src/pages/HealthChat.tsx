import React, { useState } from 'react';
import { Send, Loader2, MessageCircle } from 'lucide-react';
import axios from 'axios';

function HealthChat() {
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<Array<{ type: 'user' | 'ai'; content: string }>>([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || loading) return;

    const userMessage = message.trim();
    setChat(prev => [...prev, { type: 'user', content: userMessage }]);
    setMessage('');
    setLoading(true);

    try {
      const response = await axios.post(`https://medicalai-5zmc.onrender.com/api/chat`, {
        message: userMessage
      });

      // Highlight disclaimer dynamically
      const highlightedContent = response.data.response.replace(
        /\*\*([^*]+)\*\*/g,
        '<span class="font-bold text-red-600">$1</span>'
      );

      setChat(prev => [...prev, { type: 'ai', content: highlightedContent }]);
    } catch (error) {
      setChat(prev => [...prev, { type: 'ai', content: 'Sorry, I encountered an error. Please try again.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl sm:max-w-3xl md:max-w-2xl lg:max-w-4xl mx-auto">
        <div className="text-center mb-4 sm:mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Medical AI Chat Assistant
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-gray-600">
            Ask questions about general health and wellness
          </p>
        </div>

        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-3 sm:p-4 md:p-6">
          <div className="h-[400px] sm:h-[450px] md:h-[500px] overflow-y-auto p-2 sm:p-4 border border-gray-200 rounded-lg mb-3 sm:mb-4">
            {chat.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <MessageCircle className="w-8 sm:w-10 h-8 sm:h-10 mb-2 sm:mb-3" />
                <p className="text-xs sm:text-sm">Start a conversation with the AI assistant</p>
              </div>
            ) : (
              chat.map((msg, index) => (
                <div key={index} className={`mb-3 sm:mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div
                    className={`inline-block max-w-[75%] sm:max-w-[80%] break-words rounded-lg p-2 sm:p-3 ${
                      msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 sm:gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your health-related question..."
              className="flex-1 px-3 py-2 sm:px-4 sm:py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto text-sm sm:text-base"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !message.trim()}
              className={`px-4 sm:px-6 py-2 rounded-lg flex items-center justify-center ${
                loading || !message.trim()
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white text-sm sm:text-base`}
            >
              {loading ? <Loader2 className="w-4 sm:w-5 h-4 sm:h-5 animate-spin" /> : <Send className="w-4 sm:w-5 h-4 sm:h-5" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


export default HealthChat;
