# Use official Node.js LTS image
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build NestJS app
RUN npm run build

# Expose app port
EXPOSE 3000

# Start the app
# CMD ["node", "dist/main.js"]

CMD ["node", "-r", "./dist/crypto.bootstrap.js", "dist/main.js"]


