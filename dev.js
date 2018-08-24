var liveServer = require('live-server');

var params = {
  port: 3000, // Set the server port. Defaults to 8080.
  root: '.', // Set root directory that's being served. Defaults to cwd.
  file: 'index.html', // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  middleware: [
    function(req, res, next) {
      next();
    }
  ] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
};
liveServer.start(params);
