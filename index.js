const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//bot Imports\\
const cmd = require("./commands")
const logs = require("./logs");
//Bot requirments\\
const discord = require('discord.js')
const client = new discord.Client()
const config = require("./config.json");
const prefix = (config.prefix)

client.login(config.token)
