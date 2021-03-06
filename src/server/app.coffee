# required modules
_              = require "underscore"
async          = require "async"
http           = require "http"
express        = require "express"
path           = require "path"
methodOverride = require "method-override"
bodyParser     = require "body-parser"
socketio       = require "socket.io"
errorHandler   = require "error-handler"
net		   	   = require "net"

log       = require "./lib/log"
Generator = require "./lib/Generator"

app       = express()

io        = socketio.listen server

persons = new Generator [ "first", "last", "gender", "birthday", "age", "ssn"]


# collection of client sockets
sockets = []

domain 		= "localhost"
port 		= 9001


server = net.createServer (socket) ->
    console.log "Received connection from #{socket.remoteAddress}"
    
    # socket.write "Hello, World!\n" + JSON.stringify p
	
    socket.on 'data', (data) ->
        console.log "-----------------"
        console.log "#{socket.remoteAddress} sent: #{data}"
        console.log "-----------------"
        p = persons.generate()
        socket.write(JSON.stringify p)
        


# express application middleware
app
	.use bodyParser.urlencoded extended: true
	.use bodyParser.json()
	.use methodOverride()
	.use express.static path.resolve __dirname, "../client"

# express application settings
app
	.set "view engine", "jade"
	.set "views", path.resolve __dirname, "./views"
	.set "trust proxy", true

# express application routess
app
	.get "/", (req, res, next) =>
		log.info sockets.length
		res.send "Welcome to the coffe project!"

# start the server
server.listen port, domain
log.info "Listening on " + port
