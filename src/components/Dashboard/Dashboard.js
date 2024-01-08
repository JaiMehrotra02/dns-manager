import React, { useEffect, useState } from 'react';
import DNSComponent from '../DNSGcp';
import api from '../services/api';
import DNSRecordForm from './DNSRecordForm';
import DNSRecordsTable from './DNSRecordsTable';

const Dashboard = () => {
  const [records, setRecords] = useState([]);
  
  useEffect(() => {
    // Fetch DNS records from backend
    const fetchRecords = async () => {
      try {
        const response = await api.get('/dns-records');
        setRecords(response.data);
      } catch (error) {
        console.error('Error fetching DNS records:', error);
      }
    };

    fetchRecords();
  }, []);

  // const handleAddRecord = async (newRecord) => {
  //   try {
  //     // Send a POST request to add a new DNS record
  //     await api.post('/dns-records', newRecord);
  //     // Fetch and update the records after adding a new one
  //     const response = await api.get('/dns-records');
  //     setRecords(response.data);
  //   } catch (error) {
  //     console.error('Error adding DNS record:', error);
  //   }
  // };
  

  const handleAddRecord = (newRecord) => {
    setRecords([...records, newRecord]);
  };

  const handleDeleteRecord = (id) => {
    setRecords(records.filter(record => record._id !== id));
  };

  return (
    
    

    <div>
      <h1>DNS Manager Dashboard</h1>
      <h2>Add DNS Record</h2>
      <DNSRecordForm onSubmit={handleAddRecord} />
      <h2>DNS Records</h2>
      <DNSRecordsTable records={records} onDelete={handleDeleteRecord} setRecords={setRecords}/>
      <DNSComponent/>
    </div>
    
  );
};

export default Dashboard;
