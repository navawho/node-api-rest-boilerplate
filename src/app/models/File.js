const db = require('../../database/pool');

class File {
  async create(name, path) {
    const file = db.query(
      `insert into File (name, path) values ('${name}', '${path}') returning *`
    );

    return file;
  }

  async getFiles() {
    const files = db.query(`select id, name, path from file`);

    return files;
  }

  async getFileById(id) {
    const file = db.query(`select id, name, path from file where id=${id}`);

    return file;
  }
}

export default File;
