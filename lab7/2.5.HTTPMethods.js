const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();
server.on("request", (request, responce) =>
{
    if(request.method === "GET")
    {
        return responce.end("Get Got");
    }
    else if (request.method === "POST")
    {
        return responce.end("Got a Post");
    }
    else
    {
        resource.statusCode(400);
        return responce.end("Method not supported");
    }
});

server.listen(PORT, () =>
{
    console.log('Starting server at port ${PORT}');
});
