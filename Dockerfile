
# Stage 0, 'build-stage', based on Node.js, to build and compile the frontend  
FROM arpitgo4/alpine-node AS build-stage

# RUN apk add --no-cache make gcc g++ python2 git

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build:production


# Stage 1, based on Nginx, to have only the compiled app, ready for production
FROM nginx AS nginx-server

COPY --from=build-stage /usr/src/app/dist/ /usr/share/nginx/html

EXPOSE 80