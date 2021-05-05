const express = require('express');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const app = express();
const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send("Working")
})

app.get('/appointments', async (req, res) => {
  const result = await prisma.appointment.findMany({
    orderBy: {
      hour: 'asc'
    }
  })
  res.json(result)
})

app.put('/appointments/:appointmentId', async (req, res) => {
  console.log(req.body);
  const result = await prisma.appointment.update({
    where: {
      id: parseInt(req.params.appointmentId)
    },
    data: {
      clientId: req.body.id,
      services: req.body.service,
      comments: req.body.comments,
      filled: true
    }
  })
  res.json(result)
})

app.get('/client', async (req, res) => {
  const result = await prisma.client.findMany({})
  res.json(result)
})

app.post('/client', async (req, res) => {
  const result = await prisma.client.create({
    data: {
      id: req.body.id,
      firstName: req.body.fName,
      lastName: req.body.lName,
      email: req.body.email,
      phone: req.body.phone
    }
  })
  res.json(result)
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})