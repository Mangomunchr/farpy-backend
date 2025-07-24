FROM node:20

WORKDIR /app

COPY . .

RUN npm install

CMD ["npx", "serve", "api", "-l", "8080"]
