const db = require('../../database/pool');

class Dog {
  async getDogs() {
    const dogs = db.query(`select name, description, sex from dog`);

    return dogs;
  }

  async getDogById(id) {
    const dog = db.query(
      `select name, description, sex from dog where id=${id}`
    );

    return dog;
  }

  async create(name, description, sex) {
    const dog = db.query(
      `insert into Dog (name, description, sex)
      values ('${name}', '${description}', '${sex}')
      returning name, description, sex`
    );

    return dog;
  }
}

export default Dog;
