import React from 'react';
import { Phone, Ambulance, Cross } from 'lucide-react';

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
      icon: Cross,
      description: 'General hospital inquiries and appointments',
    },
    {
      name: 'Medical Emergency Line',
      number: '(555) 987-6543',
      icon: Cross,
      description: '24/7 medical consultation service',
    },
  ];

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-50 p-4 rounded-lg mb-6 text-center border border-blue-200">
        <p className="text-blue-800 font-semibold">
          If you are experiencing a medical emergency, immediately dial 911 or your local emergency services number.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {emergencyContacts.slice(0, 2).map((contact, index) => (
            <ContactCard key={index} contact={contact} handleCall={handleCall} />
          ))}
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {emergencyContacts.slice(2, 4).map((contact, index) => (
            <ContactCard key={index + 2} contact={contact} handleCall={handleCall} />
          ))}
        </div>
      </div>

      <div className="mt-8 text-center">
        <h3 className="text-xl font-semibold mb-4 text-blue-800">Additional Emergency Resources</h3>
        <ul className="list-disc pl-6 space-y-2 inline-block text-left text-blue-700">
          <li>Poison Control Center: 1-800-222-1222</li>
          <li>Mental Health Crisis Hotline: 988</li>
          <li>Local Police (non-emergency): (555) 555-5555</li>
        </ul>
      </div>
    </div>
  );
}

function ContactCard({ contact, handleCall }: { contact: any, handleCall: (number: string) => void }) {
  const Icon = contact.icon;
  return (
    <div className="bg-white rounded-lg border border-blue-100 p-6 shadow-sm max-w-xs w-full text-center hover:shadow-md transition-shadow">
      <Icon className="w-8 h-8 text-blue-600 mb-4 mx-auto" />
      <h3 className="text-xl font-semibold mb-2 text-blue-900">{contact.name}</h3>
      <p className="text-blue-700 mb-4">{contact.description}</p>
      <button
        onClick={() => handleCall(contact.number)}
        className="w-full bg-blue-600 text-white rounded-lg px-4 py-2 hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Phone className="w-4 h-4" />
        {contact.number}
      </button>
    </div>
  );
}
