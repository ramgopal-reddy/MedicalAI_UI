import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FileText, Home, MessageCircle, Activity, Cross, MapPin } from 'lucide-react';
import DocumentAnalyzer from './pages/DocumentAnalyzer';
import HealthChat from './pages/HealthChat';
import HealthMetrics from './pages/HealthMetrics';
import Emergency from './pages/Emergency';
import Footer from './components/Footer';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to Your Health Assistant</h1>
        <div className="grid gap-8 md:grid-cols-2">
          <Link
            to="/document-analyzer"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all min-h-[200px]"
          >
            <FileText className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Document Analyzer</h2>
            <p className="text-gray-600 text-base">Analyze medical documents and reports</p>
          </Link>

          <Link
            to="/health-chat"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all min-h-[200px]"
          >
            <MessageCircle className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Health Chat</h2>
            <p className="text-gray-600 text-base">24/7 AI-powered medical assistance</p>
          </Link>

          <Link
            to="/health-metrics"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all min-h-[200px]"
          >
            <Activity className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Health Metrics</h2>
            <p className="text-gray-600 text-base">Track and monitor your health data</p>
          </Link>

          <Link
            to="/emergency"
            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all min-h-[200px]"
          >
            <MapPin className="w-12 h-12 mb-4 text-blue-500" />
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Emergency Services</h2>
            <p className="text-gray-600 text-base">Find nearby Emergency facilities and contacts</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <nav className="bg-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="flex space-x-8">
                <Link
                  to="/"
                  className="flex items-center text-gray-800 hover:text-blue-500 font-medium text-lg"
                >
                  <Home className="w-6 h-6 mr-2" />
                  Home
                </Link>
                <Link
                  to="/document-analyzer"
                  className="flex items-center text-gray-800 hover:text-blue-500 font-medium text-lg"
                >
                  <FileText className="w-6 h-6 mr-2" />
                  Document Analyzer
                </Link>
                <Link
                  to="/health-chat"
                  className="flex items-center text-gray-800 hover:text-blue-500 font-medium text-lg"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Health Chat
                </Link>
                <Link
                  to="/health-metrics"
                  className="flex items-center text-gray-800 hover:text-blue-500 font-medium text-lg"
                >
                  <Activity className="w-6 h-6 mr-2" />
                  Health Metrics
                </Link>
                <Link
                  to="/emergency"
                  className="flex items-center text-gray-800 hover:text-blue-500 font-medium text-lg"
                >
                  <MapPin className="w-6 h-6 mr-2" />
                  Emergency Map
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/document-analyzer" element={<DocumentAnalyzer />} />
            <Route path="/health-chat" element={<HealthChat />} />
            <Route path="/health-metrics" element={<HealthMetrics />} />
            <Route path="/emergency" element={<Emergency />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
