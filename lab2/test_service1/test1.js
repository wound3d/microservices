import express from 'express';
import logger from './logger.js';
import { v4 as uuidv4 } from 'uuid';

const app = express()
const port = 5000

app.get('/service1', (req, res) => {
  res.send('Service 1 got your request!')
  const requestID = req.headers['x-request-id'] || uuidv4()
  logger.info(`Service1: Request with id ${requestID} received!`)
})

app.get('/service1/test', (req, res) => {
  res.send('Service 1 Test got your request!')
  const requestID = req.headers['x-request-id']
  logger.info(`Service1: Request with id ${requestID} received!`)
})

app.listen(port, () => {
  logger.info(`Service 1 has started on port ${port}`)
})