# node-sass 4.14 / react-scripts 3 require Node 14
FROM node:14-bullseye

WORKDIR /app

# Install dependencies first to make use of Docker layer caching
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
