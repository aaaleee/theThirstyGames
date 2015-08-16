var express = require('express');
var fs = require('fs');
var bodyParser = require('body-parser');
var mustache = require('mustache');
var dbManager = require('./dbManager');

var app = express();
var http = require('http').Server(app);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

var servePage = function(req,res) {
	fs.readFile(req.body.file, function (err, html) {
		res.writeHeader(200, {"Content-Type": "text/html"});
    	res.write(html);
    	res.end(); 
	});
}

app.get('/', function(req, res) {
    req.body.file = "login.html";
    servePage(req,res);
});

app.get('/login', function(req, res) {
    req.body.file = "login.html";
    servePage(req,res);
});

app.get('/meterReading', function(req, res) {
    req.body.file = "meterReading.html";
    servePage(req,res);
});

app.get('/main', function(req,res) {
	    var fragments = {};

    var profileMenu = fs.readFileSync('profileMenu.html', "utf8");
    var profileMenuHtml = mustache.to_html(profileMenu, {});

    var myStatsHtml = fs.readFileSync('myStats.html', "utf8");

    fragments.profileMenu = profileMenuHtml;
    fragments.myStats = myStatsHtml;

    var page = fs.readFileSync('appFrame.html', "utf8");
    var html = mustache.to_html(page, fragments);

    res.status(200).send(html);
    res.end();

});

app.get('/userStats', function(req,res) {
    var data = {};
    res.status(200).send(data);
    res.end();
});

http.listen(8080);
console.log('Listening on port 8080...');