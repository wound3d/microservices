import express from 'express';
import logger from './logger.js';
import { v4 as uuidv4 } from 'uuid';

const app = express()
const port = 5002

app.get('/service2', (req, res) => {
  res.send('Service 2 got your request!')
  const requestID = req.headers['x-request-id'] || uuidv4()
  logger.info(`Service 2: Request with id ${requestID} received!`)
})

app.listen(port, () => {
  logger.info(`Service 2 has started on port ${port}`)
})