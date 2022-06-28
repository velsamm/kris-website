## DEVELOPMENT

```
npm start -> localhost:3000
```

## PRODUCTION

```
npm run build &&  npm run prod:start
```

## DOCKER

# Build

```
docker build -t kris-website .
docker-compose -f kris-website-compose.yaml up -d --build --force-recreate
```
