var electronPath = require('electron-prebuilt'),
    path = require('path'),
    spawn = require('child_process').spawn;

var electron = spawn(electronPath, [path.resolve(__dirname, "main.js")], {stdio: 'inherit'});
