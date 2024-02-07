# Projeto Base Backend

Base para um projeto backend em Node.js, Express e TypeORM.

## Database

- URL
  `postgres://<username>:<password>@<host>:<port>/<database>`

## Migrações

- Criar Migração

`yarn run typeorm migration:generate ./src/migrations/InitialMigration -- -d ./src/data-source.ts`

- Executar Migrações

`yarn run typeorm migration:run -- -d ./src/data-source`

- Reverter Migração

`yarn run typeorm migration:revert -- -d ./src/data-source`
