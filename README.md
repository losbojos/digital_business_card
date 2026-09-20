# Digital business card - Цифровая визитка

Backend на NestJS: профиль, навыки, опыт, проекты через GraphQL.

## Демо

Откройте в браузере: https://digitalbusinesscard-production.up.railway.app/graphql
Выполните команду или её подмножество: 
```bash
query { profile { name description links {label url} skills { name } experience { company position periodStart periodEnd achievements} projects { name note demo source } } }

```

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
