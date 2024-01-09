// Create web server
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse text bodies (as sent by textarea / x-www-form-urlencoded)
app.use(bodyParser.text());
// Parse various different custom