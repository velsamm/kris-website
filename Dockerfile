FROM node:14
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "run", "build"]
CMD ["npm", "run", "prod:start"]
EXPOSE 9000
