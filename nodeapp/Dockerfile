FROM node:14.14

RUN mkdir -p /node/app
WORKDIR /node/app

EXPOSE 80
COPY app.js /node/app/app.js


CMD node /node/app/app.js
ENTRYPOINT ["node", "/node/app/app.js"]