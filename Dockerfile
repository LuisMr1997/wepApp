FROM node:alpine

WORKDIR /src

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD ["yarn", "dev"]