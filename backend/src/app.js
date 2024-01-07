const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('./config');
const dnsRoutes = require('./routes/dnsRoutes');

const app = express();


app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB Connection Error:', err));

// Use routes
app.use('/dns-records', dnsRoutes);

// Start the server
const PORT = config.port || 3001;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
