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
  const result = await prisma.appointments.findMany({
    orderBy: {
      hour: 'asc'
    }
  })
  res.json(result)
})

app.put('appointments/:appointmentId', async (req, res) => {
  const result = await prisma.appointments.update({
    where: {
      id: req.params.appointmentId
    },
    data: {
      user: {
        connect: {
          id: req.body.id
        }
      },
      service: req.body.service,
      comment: req.body.comments,
      filled: true
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})