FROM node:alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install -ci
COPY . .
EXPOSE 3000