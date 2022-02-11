FROM node:14-alpine AS builder
WORKDIR /scr

COPY package.json ./

RUN npm install

RUN npm install -g nodemon
RUN npm install -g forever

COPY . .

EXPOSE 3002
CMD forever -c 'nodemon --exitcrash' server