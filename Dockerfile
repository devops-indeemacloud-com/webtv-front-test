# Use an official Node.js runtime as a parent image
FROM node:16

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY . .

# Install dependencies
RUN npm install && \ 
    npm install -g @angular/cli 

# Generate the build of the application
RUN ng build

# Start the application
CMD ["ng", "serve", "--host", "0.0.0.0", "--disable-host-check"]
EXPOSE 4200
