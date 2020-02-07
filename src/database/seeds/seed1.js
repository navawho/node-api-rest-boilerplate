const db = require('../client');

async function seedTables() {
  await db.connect();

  await db.query(`insert into File (name, path) values ('a', 'b')`);

  await db.query(`insert into cat (file_id, name, description, sex, birth, color) values
  (1, 'Xana', 'top', 'f', '2007-04-19', 'Preto e branco'),
  (1, 'Oreo', 'top', 'm', '2009-02-14', 'Preto e branco'),
  (1, 'Zara', 'top', 'f', '2019-10-25', 'Siamês'),
  (1, 'Loki', 'top', 'm', '2019-02-01', 'Pintado');`);

  await db.query(`insert into dog (file_id, name, description, sex, birth, port, color) values
(1, 'Rick', 'top', 'm', '2013-04-19', 'Pequeno', 'Branco e marrom'),
(1, 'Rex', 'top', 'm', '2003-02-14', 'Pequeno', 'Marrom'),
(1, 'Luna', 'top', 'f', '2019-11-25', 'Grande', 'Preto e branco'),
(1, 'Luke', 'top', 'm', '2019-02-01', 'Médio', 'Branco');`);

  await db.end();
}

seedTables();
