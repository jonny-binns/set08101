const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();
server.on("request", (request, responce) =>
{
    switch (request.url)
    {
      case "/":
        responce.end("Our Beautiful homepage");
        break;
      case "/about":
        responce.end("An equally beatutiful about page")
        break;
      default:
        responce.statusCode = 404;
        responce.end("Page not found");
    }
});

server.listen(PORT, () =>
{
    console.log('Starting server at port ${PORT}');
});
