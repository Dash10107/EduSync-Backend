# Use the official Node.js image as a base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install application dependencies
RUN npm install

# Copy the entire application to the container
COPY . .

# Expose the port your app runs on
EXPOSE 5000

# Command to run your application
CMD ["npm", "start"]
