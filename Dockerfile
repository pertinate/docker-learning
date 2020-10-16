FROM node:current

ARG port=8080

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY package*.json ./

RUN npm install

COPY --chown=node:node . .

ENV PORT=${port}

EXPOSE ${port}

CMD [ "npm", "start" ]