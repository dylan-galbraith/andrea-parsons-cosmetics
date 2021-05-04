const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Working")
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})