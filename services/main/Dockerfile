# Use the official Node.js 14 image from Docker Hub
FROM node:14.17.2

# Create a directory where our app will be placed
RUN mkdir -p /usr/src/app

# Change directory so that our commands run inside this new directory
WORKDIR /usr/src/app

# Copy dependency definitions
COPY package.json /usr/src/app
COPY package-lock.json /usr/src/app

# Set to production
ENV NODE_ENV production

# Install dependencies using npm
RUN npm ci --poduction

# Get all the code needed to run the app
COPY . /usr/src/app

# Serve the app
CMD ["node", "index.js"]
