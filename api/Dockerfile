FROM node:16

WORKDIR /app/api

COPY . .

RUN npm install

RUN npm run build

CMD ["node","dist/main"]

# CMD ["npm","run", "start"]