# Simple Node.js Web Server

Welcome to the Simple Node.js Web Server project! This repository contains a basic implementation of a web server using the HTTP module in Node.js.

## Overview

This project demonstrates how to create a simple web server with Node.js. The server can handle HTTP requests and serve static files. It's a great starting point for learning about server-side scripting and Node.js fundamentals.

## Features

- **Basic HTTP Server:** Set up to listen on a specified port.
- **Serve Static Files:** Responds with static files from a designated directory.
- **Handle HTTP Requests:** Processes incoming requests and sends appropriate responses.

## Installation

To get started with this project, you'll need to have [Node.js](https://nodejs.org/) installed on your machine. Follow these steps to set up the server:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/c0lap5o/simplenodewebserver.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd simplenodewebserver
   ```

3. **Install Dependencies (if any):**

   This project doesn't require any additional dependencies. 

4. **Run the Server:**

   ```bash
   node server.js
   ```

   By default, the server will start on port 8080. You can access it by navigating to `http://localhost:8080` in your web browser.

## Usage

- **Static Files:** Place any files you want to serve in the `src` directory. The server will automatically serve files from this directory.
- **Customization:** You can modify `server.js` to change the port, add custom routes, or handle different types of requests.

## Example

To test the server, you can modify the HTML file in the `src` directory.

Navigate to `http://localhost:8080/index.html` to see the result.

## Future Enhancements

This project is a work in progress, and future updates will include:

- Support for dynamic content and API endpoints.
- Integration with additional Node.js modules for enhanced functionality.
- Improved error handling and logging.

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, please feel free to open an issue or submit a pull request.
