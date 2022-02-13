FROM node:12-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . .

EXPOSE 80

CMD [ "node", "server.js" ]

#BUILD
#docker build -t <your username>/node-web-app .
#RUN IMAGE
#docker run -p 49160:8080 -d <your username>/node-web-app
#Go into shell
#docker exec -it <container id> /bin/bash