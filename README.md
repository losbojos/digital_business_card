# Digital business card - Цифровая визитка

Backend на NestJS: профиль, навыки, опыт, проекты через GraphQL.

## Запуск локально

```bash
npm install
cp .env.example .env
docker compose up -d db
npm run start:dev
```

Миграции и инициализация БД выполняется на старте приложения

## Запуск всего в Docker

```bash
cp .env.example .env    # опционально проставить опции конфигурации Без .env подставятся дефолтные значения.
docker compose up -d --build
```

GraphQL: http://localhost:3000/graphql
