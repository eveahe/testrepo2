const express = require('express');
// require the npm library
const app = express();
// create a var for the app to be built using express
// app is the global variable namespace for the program we are building
const port = 9000;

app.get('/', (req, res) => res.send('Hello World!')); // our first route

app.get('/watchlist', function(req, res) {  // our second route
  res.send(`
    <h1>Watchlist</h1>
    <p>Commentary on Watchlists will go here.</p>
    `);
});

app.get('/entry/:name', function(req, res) {
    let name = req.params.name;
    res.send(`
      <h1>${name}</h1>
      <p>Commentary on ${name} will go here.</p>
      `);
  });

app.listen(port, function() {
  console.log(`Listening on port ${port}!`);
});