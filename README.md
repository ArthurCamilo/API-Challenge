# API-Challenge
## Pré requisitos
- [NodeJS](https://nodejs.org/en/)
- [Postgres](https://www.postgresql.org/download/)
## Instalação
Após baixar o node e postgres, clone o repositório

```console
git clone https://github.com/ArthurCamilo/API-Challenge.git
cd api-challenge
npm install
```

## Banco de dados
Crie o banco de dados utilizando o script abaixo

```sql
create schema bank_accounts;

create table bank_accounts.banks (
	code text primary key,
	name text not null,
	logo text not null
);

create table bank_accounts.bank_accounts (
	identification text not null,
	bank_code text not null,
	account_type text not null,
	full_name text not null,
	email text not null,
	status text not null,
	agency_code text not null,
	agency_digit text,
	account_code text not null,
	account_digit text,
	PRIMARY KEY (identification, bank_code, account_type)
);
```

## Variáveis de ambiente
Preencha todas as variáveis de ambiente para o express e acesso ao banco de dados
- NODE_PORT
- DB_USER
- DB_PASSWORD
- DB_HOST
- DB_PORT
- DB_NAME
- DB_SCHEMA

## Testes
Para executar os testes unitários e de integração, execute em seu terminal o comando:
`npm test`

## Executando
Para executar a aplicação, execute em seu terminal o comando:
`npm start`