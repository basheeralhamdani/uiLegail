import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMatters } from '../api/matters'; // Assuming a function to get all matters

const ClientDetailPage = () => {
  const { clientId } = useParams();
  const [client, setClient] = useState(null);
  const [clientMatters, setClientMatters] = useState([]);

  useEffect(() => {
    // In a real app, you would fetch the client's data based on clientId
    // For now, we'll find the client from the existing matters data
    const allMatters = getMatters();
    const mattersForClient = allMatters.filter(m => m.clientId === parseInt(clientId));
    
    if (mattersForClient.length > 0) {
      setClient({
        id: clientId,
        name: mattersForClient[0].clientName,
        email: `client${clientId}@example.com`,
        phone: `555-123-${1000 + parseInt(clientId)}`,
      });
      setClientMatters(mattersForClient);
    }

  }, [clientId]);

  if (!client) {
    return <div className="text-center p-8">Client not found.</div>;
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">{client.name}</h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">{client.email} | {client.phone}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Client Details</h3>
            <div className="space-y-2">
              <p><span className="font-semibold">Name:</span> {client.name}</p>
              <p><span className="font-semibold">Email:</span> {client.email}</p>
              <p><span className="font-semibold">Phone:</span> {client.phone}</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 shadow-md">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Associated Matters</h3>
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {clientMatters.map(matter => (
                <li key={matter.id} className="py-3">
                  <p className="font-semibold">{matter.documentType}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Status: {matter.status}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClientDetailPage;
