FROM node:18-alpine

WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
# Omit --production flag for TypeScript devDependencies
RUN npm i

COPY . .

# Build Next.js based on the preferred package manager
RUN npm run build

# Start Next.js based on the preferred package manager
CMD ["npm", "start"]