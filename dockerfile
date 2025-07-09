# ---- Stage 1: Build the Vite app ----
FROM node:18-alpine AS builder

WORKDIR /app

# Copy source code
COPY . .

# Install dependencies and build the project
RUN npm install
RUN npm run build

# ---- Stage 2: Serve with Nginx ----
FROM nginx:alpine

# Remove default nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Expose the port Nginx uses
EXPOSE 80

# Optional: Replace nginx config if needed
# COPY nginx.conf /etc/nginx/nginx.conf

# Default CMD from nginx image works
