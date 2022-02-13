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

# FROM node:12.16.0

# WORKDIR /usr/src

# COPY ./pages /usr/src
# COPY ./prisma /usr/src/
# COPY ./public /usr/src/
# COPY ./styles /usr/src/
# COPY app.json /usr/src/
# COPY .eslintrc /usr/src/
# COPY next-env.d.ts /usr/src/
# COPY next.config.js /usr/src/
# COPY postcss.config.js /usr/src/
# COPY tailwind.config.js /usr/src/
# COPY tsconfig.json /usr/src/
# COPY package*.json /usr/src/
# # RUN npm install -g npx
# # RUN npm prisma generate
# RUN npm install

# EXPOSE 3000

# CMD [ "npm", "run", "dev" ]