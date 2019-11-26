const { app } = require('./server');

app.listen(process.env.PORT, function() {
        console.log('listening on port: ', process.env.PORT);
});
