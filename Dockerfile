# Use the official Node.js image as the base image
FROM node:slim

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

RUN npm install ts-node -g
# Install nodemon globally
RUN npm install -g nodemon

# Copy the rest of the application code to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application with nodemon for hot-reload
CMD ["nodemon", "--watch", "src", "--exec", "ts-node", "src/app.ts"]