import React, { useState } from 'react';
import api from '../services/api';

const DNSRecordsTable = ({ records, onDelete ,setRecords }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleDelete = async (id) => {
    try {
      await api.delete(`/dns-records/${id}`);
      onDelete(id);
    } catch (error) {
      console.error('Error deleting DNS record:', error);
    }
  };

  
  const handleSearch = () => {
    
    const filteredRecords = records.filter(record =>
      (record.a && record.a.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (record.aaaa && record.aaaa.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (record.cname && record.cname.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  
  
      console.log( filteredRecords);
    setRecords(filteredRecords);
  };

  const handleClearSearch = () => {
    // Reset the searchQuery and display all records
    setSearchQuery('');
    setRecords(records);
  };


  return (
    <div>
    <div className='searchrecord'>
        <label>Search Record: </label>
        <input
          type="text"
          value={searchQuery || ''}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder='Search...'
          
        
        />
        <button class="btn btn-primary mx-100px" onClick={handleSearch}>Search</button>
        <button class="btn btn-primary" onClick={handleClearSearch}>Clear</button>
        </div>
      

    <div class="table-responsive small">
    <table className='table table-striped '>
      <thead>
        <tr>
          <th scope='col'>A (Address)</th>
          <th scope='col'>AAAA (IPv6 Address)</th>
          <th scope='col'>CNAME</th>
          <th scope='col'>MX</th>
          <th scope='col'>NS</th>
          <th scope='col'>PTR</th>
          <th scope='col'>SOA</th>
          <th scope='col'>SRV</th>
          <th scope='col'>TXT</th>
          <th scope='col'>DNSSEC</th>
          {/* Add other relevant columns */}
        </tr>
      </thead>
      <tbody>
        {records.map(record => (
          <tr key={record.id}>
            <td>{record.a}</td>
            <td>{record.aaaa}</td>
            <td>{record.cname}</td>
            <td>{record.mx}</td>
            <td>{record.ns}</td>
            <td>{record.ptr}</td>
            <td>{record.soa}</td>
            <td>{record.srv}</td>
            <td>{record.txt}</td>
            <td>{record.dnssec}</td>
            {/* Add other relevant columns */}
            <button  className='btn btn-outline-danger'onClick={() => handleDelete(record._id)}>Delete</button>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </div>
  );
};

export default DNSRecordsTable;
