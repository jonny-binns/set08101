const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();
server.on("request", (request, responce) =>
{
    responce.writeHead(666, "oh hell");
    responce.end();
});
server.listen(PORT, () =>
{
    console.log('starting server at port ${PORT}');
});
