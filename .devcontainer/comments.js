// Create web server

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
  res.end('Hello, world!');
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Path: .devcontainer/Dockerfile
FROM node:14

# Install node dependencies
COPY package.json yarn.lock /tmp/
RUN cd /tmp && yarn install

# Create app directory
RUN mkdir -p /usr/src/app && cp -a /tmp/node_modules /usr/src/app/

# Bundle app source
WORKDIR /usr/src/app
COPY . .

# Expose port
EXPOSE 3000

# Run app
CMD [ "yarn", "start"

    