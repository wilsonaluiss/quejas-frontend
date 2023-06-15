//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/sistema-quejas-frontend'));

app.get('/*', function(req,res) {

res.sendFile(path.join(__dirname,'/dist/sistema-quejas-frontend/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 'https://quejas-81f3f2221b01.herokuapp.com');