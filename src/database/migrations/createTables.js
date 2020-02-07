const db = require('../client');

async function createTables() {
  await db.connect();

  await db.query(`create table File (
    id serial primary key,
    name varchar(50) not null,
    path varchar(100) not null unique
    );`);

  await db.query(`create table Dog (
    id serial primary key,
    file_id integer references File(id) on update cascade on delete set null,
    name varchar(50) not null,
    description varchar(500) not null,
    sex varchar(1) not null check (sex ILIKE 'm' or sex ILIKE 'f'),
    adopted bool default false,
    birth date,
    age interval,
    port varchar(10),
    color varchar(50)
    );`);

  await db.query(`create table Cat (
    id serial primary key,
    file_id integer references File(id) on update cascade on delete set null,
    name varchar(50) not null,
    description varchar(500) not null,
    sex varchar(1) not null check (sex ILIKE 'm' or sex ILIKE 'f'),
    adopted bool default false,
    birth date,
    age interval,
    color varchar(50)
    );`);

  await db.end();
}

createTables();
