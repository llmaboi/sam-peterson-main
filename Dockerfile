FROM oven/bun AS builder
WORKDIR /app
COPY package.json .
COPY tsconfig.json .
COPY src/  ./src
COPY postcss.config.cjs  .
COPY svelte.config.js  .
COPY tailwind.config.ts  .
COPY vite.config.ts  .
COPY static/  ./static
COPY bun.lockb .
RUN bun install
RUN bun run build

FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
