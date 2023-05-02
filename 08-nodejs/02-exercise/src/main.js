import express from 'express'
// const express = require('express')
const webServer = express();

const dataNew = [
  { name: "news 1", detail: "detail 1" },
  { name: "news 2", detail: "detail 2" },
  { name: "news 3", detail: "detail 3" },
]
const dataUser = [
    {userId: "mock-id-1"},
    {name: "mock-id-2"},
    {name: "mock-id-3"},
  ]

  const dataMe ={ 
    name: "mock-name",
    role: "user",
    picture: "https://shorturl.at/qtFJM"
  }
  const dataCheck = "Server is fine!"
// code down below
webServer.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})
webServer.get('/news',(req,res)=>{
    res.send(dataNew)
})
webServer.get('/users',(req,res)=>{
    res.send(dataUser)
})
webServer.get('/me',(req,res)=>{
    res.send(dataMe)
})
webServer.get('/health-check',(req,res)=>{
    res.send(dataCheck)
})

webServer.listen(8080,()=>{
    console.log('Listening port 8080');
})