const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();
server.on("request", (request, responce) =>
{
    responce.setHeader("Set-Cookie", ["daka=dakadaka", 'type=ninja', 'name=jonny']);
    responce.end('Your cookies are:  ${request.headers.cookie}');
});

server.listen(PORT, () =>
{
    console.log('starting server at port ${PORT}');
});
