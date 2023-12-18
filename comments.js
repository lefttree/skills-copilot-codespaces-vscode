// create web server
// 1. load modules
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
const { parse } = require('path');
var template = require('./lib/template.js');
var path = require('path');
var sanitizeHtml = require('sanitize-html');

// 2. create web
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query; // querystring
    var pathname = url.parse(_url, true).pathname; // path
    var title = queryData.id;
    var filteredId = path.parse(title).base;
    var description = queryData.id