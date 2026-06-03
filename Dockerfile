# --- Stage 1: Build Layer ---
FROM node:24-alpine AS builder

WORKDIR /app

# Copy dependency manifests
COPY package*.json ./

# Install all dependencies (including devDependencies needed for nesting build steps)
RUN npm ci

# Copy application source files
COPY . .

# Compile TypeScript into a distribution bundle (/dist folder)
RUN npm run build:all

# Remove development dependencies to keep the runtime clean
RUN npm prune --production


# --- Stage 2: Runtime Layer ---
FROM node:24-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production

# Copy only the compiled output and production dependencies from Stage 1
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dist ./dist

# Inform Docker that the application listens on port 8080
EXPOSE 8080

# Command to execute your production entrypoint
CMD ["node", "dist/apps/backend/main.js"]