const db = require('../../database/pool');

class Cat {
  async getCats() {
    const cats = db.query(`select name, description, sex from cat`);

    return cats;
  }

  async getCatById(id) {
    const cat = db.query(
      `select name, description, sex from cat where id=${id}`
    );

    return cat;
  }

  async create(name, description, sex) {
    const dog = db.query(
      `insert into Cat (name, description, sex)
      values ('${name}', '${description}', '${sex}')
      returning name, description, sex`
    );

    return dog;
  }
}

export default Cat;
