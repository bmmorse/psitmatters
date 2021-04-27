const express = require('express');
const path = require('path');
const enforce = require('express-sslify');

const app = express();

// always force https in production
if (process.env.NODE_ENV === 'production') {
  app.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// static assets
app.use(express.static(path.join(__dirname, 'client/build')));

// API
app.use('/api', require('./API/psitmatters'));

// Always serve React's index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

// catch any errors
app.use((err, req, res, next) => {
  if (err) {
    res.sendStatus(400);
  } else {
    next();
  }
});

// start the app
const PORT = process.env.PORT || 4004;
app.listen(PORT, () => {
  console.log(`${process.env.NODE_ENV} || ${PORT}`);
});
