# Use an official Node.js image as the base image
FROM node:21-alpine

# Set the working directory in the container
WORKDIR /app

# This line is importent
# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the React app
RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# Command to serve the built React app
CMD ["npm", "start"]