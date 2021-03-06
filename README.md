## DEVELOPMENT

```
npm start
```

## PRODUCTION

```
npm run prod:build prod:start
```

## DOCKER

# Build

```
docker build -t kris-website .
docker-compose -f kris-website-compose.yaml up -d --force-recreate
```
