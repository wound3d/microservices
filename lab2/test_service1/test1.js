// import express from 'express';
// import logger from './logger.js';
// import { v4 as uuidv4 } from 'uuid';

const express = require('express')
const uuidv4 = require('uuid')

const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Service 1 got your request!')
  const requestID = req.headers['x-request-id']
  // logger.info(`Service1: Request with id ${requestID} received!`)
    console.log(`Service1: Request with id ${requestID} received!`)
})

app.get('/test', (req, res) => {
  res.send('Service 1 Test got your request!')
  const requestID = req.headers['x-request-id']
  // logger.info(`Service1: Request with id ${requestID} received!`)
  console.log(`Service1: Request with id ${requestID} received!`)
})

app.listen(port, () => {
  //logger.info(`Service 1 has started on port ${port}`)
  console.log(`Service 1 has started on port ${port}`)
})