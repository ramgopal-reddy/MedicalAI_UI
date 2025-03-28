import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FileText, Home, MessageCircle, Activity } from 'lucide-react';
import DocumentAnalyzer from './pages/DocumentAnalyzer';
import HealthChat from './pages/HealthChat';
import HealthMetrics from './pages/HealthMetrics';
import Emergency from './pages/Emergency';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Your Health Assistant</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/document-analyzer"
            className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <FileText className="w-6 h-6 mr-3 text-blue-500" />
            <span className="text-lg font-medium text-gray-800">Document Analyzer</span>
          </Link>
          <Link
            to="/health-chat"
            className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <MessageCircle className="w-6 h-6 mr-3 text-blue-500" />
            <span className="text-lg font-medium text-gray-800">Health Chat</span>
          </Link>
          <Link
            to="/health-metrics"
            className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Activity className="w-6 h-6 mr-3 text-blue-500" />
            <span className="text-lg font-medium text-gray-800">Health Metrics</span>
          </Link>
          <Link
            to="/emergency"
            className="flex items-center justify-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <Activity className="w-6 h-6 mr-3 text-blue-500" />
            <span className="text-lg font-medium text-gray-800">Health Emergency</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-500"
              >
                <Home className="w-5 h-5 mr-2" />
                Home
              </Link>
              <Link
                to="/document-analyzer"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-500"
              >
                <FileText className="w-5 h-5 mr-2" />
                Document Analyzer
              </Link>
              <Link
                to="/health-chat"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-500"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Health Chat
              </Link>
              <Link
                to="/health-metrics"
                className="inline-flex items-center px-1 pt-1 text-gray-900 hover:text-blue-500"
              >
                <Activity className="w-5 h-5 mr-2" />
                Health Metrics
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/document-analyzer" element={<DocumentAnalyzer />} />
        <Route path="/health-chat" element={<HealthChat />} />
        <Route path="/health-metrics" element={<HealthMetrics />} />
        <Route path="/emergency" element={<Emergency />} />
      </Routes>
    </Router>
  );
}

export default App;
