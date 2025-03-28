import React, { useState } from 'react';
import { Activity, Heart, Thermometer, Droplet, LineChart, Loader2 } from 'lucide-react';
import axios from 'axios';

// const API_URL = import.meta.env.API_URL || 'http://localhost:8000';

function HealthMetrics() {
  const [formData, setFormData] = useState({
    bloodPressure: '',
    bloodSugar: '',
    cholesterol: '',
    heartRate: '',
    temperature: ''
  });
  const [prediction, setPrediction] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(`https://testing-final-07ll.onrender.com/api/predict`, formData);
      setPrediction(response.data.prediction);
    } catch (error) {
      setPrediction('Error analyzing health metrics. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const metrics = [
    {
      name: 'bloodPressure',
      label: 'Blood Pressure',
      placeholder: '120/80',
      icon: Activity,
      unit: 'mmHg'
    },
    {
      name: 'bloodSugar',
      label: 'Blood Sugar',
      placeholder: '100',
      icon: Droplet,
      unit: 'mg/dL'
    },
    {
      name: 'cholesterol',
      label: 'Cholesterol',
      placeholder: '200',
      icon: LineChart,
      unit: 'mg/dL'
    },
    {
      name: 'heartRate',
      label: 'Heart Rate',
      placeholder: '75',
      icon: Heart,
      unit: 'bpm'
    },
    {
      name: 'temperature',
      label: 'Temperature',
      placeholder: '98.6',
      icon: Thermometer,
      unit: '°F'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Health Metrics Analyzer
          </h1>
          <p className="text-lg text-gray-600">
            Enter your health metrics for AI-powered analysis
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {metrics.map(({ name, label, placeholder, icon: Icon, unit }) => (
                <div key={name} className="space-y-2">
                  <label className="flex items-center text-gray-700 font-medium">
                    <Icon className="w-5 h-5 mr-2 text-blue-500" />
                    {label}
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name={name}
                      value={formData[name as keyof typeof formData]}
                      onChange={handleChange}
                      placeholder={placeholder}
                      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                      {unit}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg flex items-center justify-center ${
                loading
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-blue-500 hover:bg-blue-600'
              } text-white font-medium`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin mr-2" />
                  Analyzing...
                </>
              ) : (
                'Analyze Metrics'
              )}
            </button>
          </form>
        </div>

        {prediction && (
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Analysis Results
            </h2>
            <div className="prose max-w-none">
              <p className="text-gray-700 whitespace-pre-line">{prediction}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default HealthMetrics;
