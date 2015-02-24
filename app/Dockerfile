FROM node:0.10

RUN npm install express-generator -g

WORKDIR /app
ADD . /app

CMD ["node", "bin/www"]