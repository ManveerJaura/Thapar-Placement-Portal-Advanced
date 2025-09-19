# Step 1: Base image
FROM node:18

# Step 2: Create app directory
WORKDIR /app

# Step 3: Copy package.json and install deps
COPY package*.json ./
RUN npm install

# Step 4: Copy source code
COPY . .


# Step 5: Expose backend port
EXPOSE 5000

# Step 6: Start the server
CMD ["npm", "start"]
