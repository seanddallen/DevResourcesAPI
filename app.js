const { app } = require('./server');

// eslint-disable-next-line no-console
app.listen(process.env.PORT, () => console.log('listening on port: ', process.env.PORT));
