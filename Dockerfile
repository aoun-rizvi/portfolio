# Base
FROM node:16.13.2-alpine3.14 as base

WORKDIR /usr/src/app

COPY ./.npmrc ./
COPY ./.env ./
COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install


# Build
FROM node:16.13.2-alpine3.14 as builder

WORKDIR /usr/src/app

COPY . .
COPY --from=base /usr/src/app/node_modules ./node_modules

RUN npm run build


# Run
FROM node:16.13.2-alpine3.14

RUN apk --no-cache update
RUN apk --no-cache upgrade
RUN apk --no-cache add vim
RUN apk --no-cache add procps

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/.env ./
COPY --from=builder /usr/src/app/Makefile ./
COPY --from=builder /usr/src/app/package*.json ./
COPY --from=builder /usr/src/app/next.config.js ./
COPY --from=builder /usr/src/app/.next ./.next
COPY --from=builder /usr/src/app/public ./public
COPY --from=builder /usr/src/app/node_modules ./node_modules

RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001
RUN chown -R nextjs:nodejs /usr/src/app/.next
USER nextjs

EXPOSE 3000


CMD [ "npm", "run", "make", "start" ]
