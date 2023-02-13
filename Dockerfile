FROM node:15

WORKDIR /usr/src

COPY package.json .

EXPOSE 4000

RUN npm i

COPY . .

RUN npx prisma generate

RUN npx run prisma migrate deploy

RUN npx run prisma migrate dev

RUN npx run prisma db seed

RUN apt-get update && apt-get install -y wget

ENV DOCKERIZE_VERSION v0.6.1
RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz