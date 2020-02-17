const db = require('../client');

async function example() {
  await db.connect();

  await db.query(`set timezone = 'UTC+3'`); // Fortaleza, Brasil Time Zone

  await db.query(`create table files (
    id serial primary key not null,
    name varchar not null,
    path varchar not null unique,
    url varchar unique,
    created_at timestamptz default current_timestamp not null,
    updated_at timestamptz default null
    );`);

  await db.query(`create table users (
    id serial primary key not null,
    avatar_id integer references files(id) on update cascade on delete set null,
    name varchar not null,
    email varchar not null unique,
    password_hash varchar not null,
    admin bool default false not null,
    created_at timestamptz default current_timestamp not null,
    updated_at timestamptz default null
  );`);

  await db.end();
}

example();
