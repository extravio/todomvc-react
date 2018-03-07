FROM node:9-alpine

RUN apk add --no-cache git
RUN apk add --no-cache nano

WORKDIR /usr/src/app/
