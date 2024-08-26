FROM node:alpine

WORKDIR /usr/src/tacoBot

COPY package*.json ./

RUN npm install

COPY . .
 
CMD ["node", "src/main.js"]