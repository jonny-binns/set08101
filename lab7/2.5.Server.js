const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();

server.on("request", (request, responce) =>
{
    const languages = request.headers["accept-language"];
    responce.end(languages);
});

server.listen(PORT, () =>
{
    console.log('starting server at port ${PORT}');
});
