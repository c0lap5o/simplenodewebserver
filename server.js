// server.js
const http = require('http');
const fs = require('fs').promises; // Use promises for async file reading
const path = require('path');

// Server configuration
const hostname = '127.0.0.1';
const port = 8080;

// Set up file paths
const publicDir = path.join(__dirname, 'src'); // Directory for all HTML files

// Utility function to serve files
const serveFile = async (res, filePath, contentType = 'text/html') => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    } catch (err) {
        console.error(`Error reading file ${filePath}:`, err);
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Internal Server Error');
    }
};

// Request handler
const requestHandler = async (req, res) => {
    console.log(`Request URL: ${req.url}`);

    // Route handler
    switch (req.url) {
        case '/':
            await serveFile(res, path.join(publicDir, 'index.html'));
            break;
        case '/company':
            await serveFile(res, path.join(publicDir, 'company.html'));
            break;
        case '/team':
            await serveFile(res, path.join(publicDir, 'team.html'));
            break;
        case '/features':
            await serveFile(res, path.join(publicDir, 'features.html'));
            break;
        case '/login':
            await serveFile(res, path.join(publicDir, 'login.html'));
            break;
        case '/signup':
            await serveFile(res, path.join(publicDir, 'signup.html'));
            break;
        default:
            // Handle 404 - Not Found
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('<h1>404 - Page Not Found</h1>');
            break;
    }
};

// Create the server
const server = http.createServer(requestHandler);

// Start the server
server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
