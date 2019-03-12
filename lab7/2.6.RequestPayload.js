const { createServer } = require("http");
const PORT = process.env.PORT || 5000;
const server = createServer();

server.on("request", (request, response) =>
{
    if(request.method === "POST")
    {
        let data = "";
        request.on("data", chunk =>
      {
          data += chunk;
      });
      request.on("end", () =>
      {
          try
          {
              const requestData = JSON.parse(data);
              requestData.ourMessage = "Success";
              response.setHeader("Content-Type", "application/jason");
              response.end(JSON.stringify(requestData));
          }
          catch(e)
          {
              response.statusCode = 400;
              response.end("Invalid JSON");
          }
      });
    }
    else
    {
        response.statusCode = 400;
        response.end("please POST a JSON object");
    }
});

server.listen(PORT, () =>
{
    console.log('starting server at port ${PORT}');
});
