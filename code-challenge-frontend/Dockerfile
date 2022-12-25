FROM node:18

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g @angular/cli && ng build

RUN npm install -g http-server

CMD ["http-server", "dist/code-challenge-frontend"]
