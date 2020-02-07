const db = require('../../database/pool');

class File {
  async create(name, path) {
    const file = db.query(
      `insert into File (name, path) values ('${name}', '${path}') returning *`
    );

    return file;
  }
}

export default File;
