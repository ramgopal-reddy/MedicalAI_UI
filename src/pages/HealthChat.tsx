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

      // Highlight disclaimer text dynamically
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6 flex items-center justify-center">
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Medical AI Chat Assistant</h1>
          <p className="text-base md:text-lg text-gray-600">Ask questions about general health and wellness</p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
          <div className="h-[500px] overflow-y-auto p-4 border border-gray-200 rounded-lg mb-4">
            {chat.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <MessageCircle className="w-10 h-10 mb-3" />
                <p>Start a conversation with the AI assistant</p>
              </div>
            ) : (
              chat.map((msg, index) => (
                <div key={index} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div
                    className={`inline-block max-w-full md:max-w-[80%] break-words rounded-lg p-3 ${
                      msg.type === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-800'
                    }`}
                    dangerouslySetInnerHTML={{ __html: msg.content }}
                  />
                </div>
              ))
            )}
          </div>

          <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 md:gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your health-related question..."
              className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full md:w-auto"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !message.trim()}
              className={`px-6 py-2 rounded-lg flex items-center ${
                loading || !message.trim()
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white`}
            >
              {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HealthChat;
