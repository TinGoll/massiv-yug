FROM node:16-alpine AS builder
WORKDIR /app
COPY /*.json ./
COPY . .
RUN npm install
RUN npm rebuild --verbose sharp
RUN npm run build

FROM zenika/alpine-chrome:with-playwright

USER root

# Установка зависимостей Chrome для Puppeteer
RUN apk --no-cache add \
        udev \
        ttf-freefont \
        harfbuzz \
        nss \
        freetype \
        freetype-dev \
        zlib \
        dbus \
        xvfb

WORKDIR /app
COPY --from=builder /app ./

EXPOSE 3100
CMD ["npm", "run", "start:prod"]