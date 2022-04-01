FROM node:lts-alpine
WORKDIR /app
COPY package*.json ./
RUN yarn

COPY tsconfig.json ./
COPY src src
COPY public public

CMD yarn start