const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();

server.on("request", (request, responce) =>
{
    responce.setHeader("content-type", "application/json");
    responce.end(JSON.stringify({name: "jonny"}));
});

server.listen(PORT, () =>
{
    console.log('starting server at port %{PORT}');
});
