// Create web server
const server = http.createServer((request, response) => {
    // Log request
    console.log(`Request: ${request.url}`);

    // Get request URL
    const url = new URL(request.url, `http://${request.headers.host}`);

    // Get query parameters
    const query = url.searchParams;

    // Get path
    const path = url.pathname;

    // Check if path is API
    if (path === "/api") {
        // Send response
        response.writeHead(200, { "Content-Type": "application/json" });
        response.end(JSON.stringify({ message: "API" }));
    } else {
        // Send response
        response.writeHead(200, { "Content-Type": "text/html" });
        response.end("Hello, World!");
    }
});

// Start web server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});