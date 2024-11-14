FROM node:alpine3.18 AS build

ARG VITE_REACT_APP_BACKEND_BASEURL
ENV VITE_REACT_APP_BACKEND_BASEURL=${VITE_REACT_APP_BACKEND_BASEURL}

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM nginx:1.23-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]




