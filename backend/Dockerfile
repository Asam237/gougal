FROM node:16.13.1-alpine as builde
COPY ./package.json ./
RUN yarn install
COPY . .
ENV HOST 0.0.0.0
EXPOSE 3010
CMD ["yarn", "start"]



