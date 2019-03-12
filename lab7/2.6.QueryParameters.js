const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();
server.on("request", (request, responce) =>
{
    const { query } = require("url").parse(request.url, true);
    if(query.name)
    {
        responce.end('You required parameter with value ${query.name}');
    }
    else
    {
        responce.end("Hello");
    }
});
server.listen(PORT, () =>
{
    console.log("starting server at port ${PORT}");
});
