const { connect, connection } = require("mongoose");

connect("mongodb://localhost/socialNetworkApi18", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

module.exports = connection;
