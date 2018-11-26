# Build Angular app
FROM node AS stage
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY . /usr/src/app
RUN npm install
RUN npm install -g @angular/cli@6.1.5

RUN ng build --prod

# Copy build to target docker image
FROM nginx:alpine AS base
COPY nginx.conf /etc/nginx/nginx.conf
WORKDIR /usr/share/nginx/html
COPY --from=stage /usr/src/app/dist/toolbox .