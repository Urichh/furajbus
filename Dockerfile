FROM node:20-alpine AS runtime

WORKDIR /app

COPY dist/ /app/dist/
COPY package*.json ./

RUN npm install --only=production

EXPOSE 4000

CMD ["node", "dist/furajbus/server/server.mjs"]