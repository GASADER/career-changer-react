import express from 'express'
// const express = require('express')
const webServer = express();

// code down below
webServer.get('/',(req,res)=>{
    res.send('<h1>Home</h1>')
})
webServer.get('/news',(req,res)=>{
    res.send('<h1>News</h1>')
})
webServer.get('/users',(req,res)=>{
    res.send('<h1>Users</h1>')
})
webServer.get('/me',(req,res)=>{
    res.send('<h1>Me</h1>')
})
webServer.get('/health-check',(req,res)=>{
    res.send('<h1>health-check</h1>')
})

webServer.listen(8080,()=>{
    console.log('Listening port 4000');
})