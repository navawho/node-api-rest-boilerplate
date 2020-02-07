const db = require('../client');

async function example() {
  await db.connect();

  await db.query(`your query`);

  await db.query(`your second query`);

  await db.end();
}

example();
