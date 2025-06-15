// server.js

require('dotenv').config({ path: '.env.local' }); // ✅ Load environment variables

const express = require('express');
const next = require('next'); // ✅ Only once
const bodyParser = require('body-parser');
const cors = require('cors');
const { createServer } = require('http');
const { parse } = require('url');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

console.log("✅ Server is starting...");
console.log("✅ OpenAI API Key:", process.env.OPENAI_API_KEY ? "Loaded" : "❌ Missing");

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('✅ Server ready at http://localhost:3000');
  });
});
