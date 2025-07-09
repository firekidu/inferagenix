FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files and install deps
COPY package*.json ./
RUN npm install

# Copy the rest of your code
COPY . .

# Build your Vite app
RUN npm run build

# Expose the preview port
EXPOSE 4173

# Run Vite preview server
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "4173"]

