import axios from 'axios';
import React, { useEffect, useState } from 'react';

const DNSComponent = () => {
  const [dnsRecords, setDNSRecords] = useState([]);

  useEffect(() => {
    async function fetchDNSRecords() {
      try {
        const response = await axios.get('/api/dns-records'); // Replace with your backend endpoint
        setDNSRecords(response.data);
      } catch (error) {
        console.error('Error fetching DNS records:', error.message);
        // Handle error scenario in your React component
      }
    }

    fetchDNSRecords();
  }, []);

  // Render DNS records in your React component
  return (
    <div>
      <h2>DNS Records of GCP</h2>
      <ul>
        {dnsRecords.map((record, index) => (
          <li key={index}>{record.name} - {record.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default DNSComponent;
