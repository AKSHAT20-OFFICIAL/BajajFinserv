// netlify/bfhl.js
const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());

router.post('/bfhl', (req, res) => {
  try {
    // Your POST route logic here (same as before)

    res.json(response);
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// You can add more routes here if needed

app.use('/.netlify/functions/bfhl', router);

module.exports = app;
module.exports.handler = serverless(app);
