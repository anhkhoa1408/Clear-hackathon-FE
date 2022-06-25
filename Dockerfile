FROM node:14
# Working directory
WORKDIR /app 
COPY package*.json ./
RUN npm install
COPY . .
RUN npm rebuild node-sass
# Docker port, not local port
EXPOSE 3000
CMD ["npm", "start"]

# Build image
# docker build -t [project-name]:[tag/version]

# Run container
# docker run -p [local-port]:[docker-port] [project-name]:[tag/version]

# Stop container
# docker stop [container-name]

# Show list container
# docker ps