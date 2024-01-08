import React, { useState } from 'react';
import api from '../services/api';

const DNSRecordForm = ({ onSubmit }) => {
  const [a, setA] = useState('');
  const [aaaa, setAaaa] = useState('');
  const [cname, setCname] = useState('');
  const [mx, setMx] = useState('');
  const [ns, setNs] = useState('');
  const [ptr, setPtr] = useState('');
  const [soa, setSoa] = useState('');
  const [srv, setSrv] = useState('');
  const [txt, setTxt] = useState('');
  const [dnssec, setDnssec] = useState('');
    

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post('/dns-records', { a,aaaa,cname,mx,ns,ptr,soa,srv,txt,dnssec });
      onSubmit(response.data);
      setA('');
      setAaaa('');
      setCname('');
      setMx('');
      setNs('');
      setPtr('');
      setSoa('');
      setSrv('');
      setTxt('');
      setDnssec('');
    } catch (error) {
      console.error('Error adding DNS record:', error);
    }
  };  
  

 

  return (
    
    <div className='space'>
    <form class="row g-3" onSubmit={handleSubmit}>
  <div class="col-md-3">
    <label class="form-label">A (Address) Record:</label>
    <input type="text"  name="a"  class="form-control" value={a} onChange={(e) => setA(e.target.value)} required />
  </div>
  <div class="col-md-3">
    <label  class="form-label">AAAA (IPv6 Address) Record:</label>
    <input type="text" name="aaaa" class="form-control" value={aaaa} onChange={(e) => setAaaa(e.target.value)}  />
  </div>
  
  <div class="col-md-3">
    <label  class="form-label">CNAME (Canonical Name) Record:</label>
    <input type="text" name="cname" class="form-control" value={cname} onChange={(e) => setCname(e.target.value)}  />
  </div>
  <div class="col-md-2">
    <label  class="form-label"> MX (Mail Exchange) Record:</label>
    <input type="text" name="mx" class="form-control" value={mx} onChange={(e) => setMx(e.target.value)}   />
  </div>
  <div class="col-md-3">
    <label  class="form-label">NS (Name Server) Record:</label>
    <input type="text" name="ns" class="form-control" value={ns} onChange={(e) => setNs(e.target.value)}   />
  </div>
  <div class="col-md-3">
    <label  class="form-label">PTR (Pointer) Record:</label>
    <input type="text" name="ptr" class="form-control" value={ptr} onChange={(e) => setPtr(e.target.value)}  />
  </div>
  <div class="col-md-3">
    <label  class="form-label">SOA (Start of Authority) Record:</label>
    <input type="text" name="soa" class="form-control" value={soa} onChange={(e) => setSoa(e.target.value)}  />
  </div>
  <div class="col-md-2">
    <label  class="form-label">SRV (Service) Record:</label>
    <input type="text"  name="srv" class="form-control" value={srv} onChange={(e) => setSrv(e.target.value)}  />
  </div>
  <div class="col-md-4">
    <label  class="form-label">TXT (Text) Record:</label>
    <input type="text" name="txt" class="form-control" value={txt} onChange={(e) => setTxt(e.target.value)}   />
  </div>
  <div class="col-md-4">
    <label  class="form-label">DNSSEC:</label>
    <input type="text" name="dnssec" class="form-control" value={dnssec} onChange={(e) => setDnssec(e.target.value)}  />
  </div>
  
  
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Submit Details</button>
  </div>
</form>
</div>
  );
};

export default DNSRecordForm;
