const { app } = require('./server');

app.listen(process.env.PORT, function() {
  // eslint-disable-next-line no-console
  console.log('listening on port: ', process.env.PORT);
});
