FROM node:22-alpine

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 5002


CMD ["node", "test2.js"]