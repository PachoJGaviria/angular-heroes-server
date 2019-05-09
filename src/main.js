import app from './app'

// Get port from environment and store in Express.
const port = normalizePort(process.env.PORT || '3000')

app.use(onError)

app.listen(port, onListening)

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort (val) {
  var port = parseInt(val, 10)
  if (isNaN(port)) {
    // named pipe
    return val
  }
  if (port >= 0) {
    // port number
    return port
  }
  return false
}

/**
 * Event listener for "error" events.
 */
function onError (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
}

/**
 * Event listener for server "listening" event.
 */
function onListening () {
  console.log(`The server is listening on ${port}`)
}
