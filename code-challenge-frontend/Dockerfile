FROM node:18

WORKDIR /app/

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build --configuration --production

FROM nginx:alpine

COPY --from=0 /app/dist/code-challenge-frontend /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]