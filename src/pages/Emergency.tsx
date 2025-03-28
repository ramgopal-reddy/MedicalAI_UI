import React from 'react';
import { Phone, Ambulance, Guitar as Hospital } from 'lucide-react';

export default function Emergency() {
  const emergencyContacts = [
    {
      name: 'Emergency Services',
      number: '911',
      icon: Phone,
      description: 'For immediate medical emergencies',
    },
    {
      name: 'Ambulance Service',
      number: '911',
      icon: Ambulance,
      description: 'Request emergency medical transport',
    },
    {
      name: 'Local Hospital',
      number: '(555) 123-4567',
      icon: Hospital,
      description: 'General hospital inquiries and appointments',
    },
  ];

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div>
      <div className="bg-red-100 p-4 rounded-lg mb-6">
        <p className="text-red-700 font-semibold">
          If you are experiencing a medical emergency, immediately dial 911 or your local emergency services number.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emergencyContacts.map((contact, index) => {
          const Icon = contact.icon;
          return (
            <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
              <Icon className="w-8 h-8 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{contact.name}</h3>
              <p className="text-gray-600 mb-4">{contact.description}</p>
              <button
                onClick={() => handleCall(contact.number)}
                className="w-full bg-red-600 text-white rounded-lg px-4 py-2 hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                {contact.number}
              </button>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Additional Emergency Resources</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Poison Control Center: 1-800-222-1222</li>
          <li>Mental Health Crisis Hotline: 988</li>
          <li>Local Police (non-emergency): (555) 555-5555</li>
        </ul>
      </div>
    </div>
  );
}
