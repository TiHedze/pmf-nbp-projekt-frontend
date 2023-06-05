FROM node:18.10 as build
WORKDIR /app

RUN npm install -g @angular/cli

COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build --prod

FROM nginx as runtime
COPY --from=build /app/dist/pmf-nbp-projekt /usr/share/nginx/html