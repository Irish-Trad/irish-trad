FROM node:14.17.3

WORKDIR /usr/src/irish-trad-client

# optimises docker layering
COPY package.json .
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
