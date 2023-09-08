const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());


const user = {
  full_name: 'John Doe',
  dob: '17091999',
  email: 'john@xyz.com',
  roll_number: 'ABCD123',
};


app.post('/bfhl', (req, res) => {
    try {
      const { data } = req.body;
      const numbers = data.filter(item => !isNaN(item));
      const alphabets = data.filter(item => isNaN(item));

      alphabets.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
  
      const highestAlphabet = alphabets.length > 0 ? alphabets[alphabets.length - 1] : '';
  
      const response = {
        is_success: true,
        user_id: `user_id: ${user.full_name}_${user.dob}`,
        email: user.email,
        roll_number: user.roll_number,
        numbers,
        alphabets,
        highest_alphabet: [highestAlphabet],
      };
  
      res.json(response);
    } catch (err) {
      console.error('Error:', err);
      res.status(500).json({ err: 'server error' });
    }
  });
  
app.get('/bfhl', (req, res) => {
  const response = {
    operation_code: 1,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
