import bcrypt from 'bcryptjs';

const db = require('../../database/pool');

class User {
  async create(name, email, password_hash) {
    const user = await db.query(
      `insert into users (name, email, password_hash) values ('${name}', '${email}', '${password_hash}') returning *`
    );

    return user;
  }

  async getUsers() {
    const users = await db.query(
      `select u.id, avatar_id, f.url as avatar_url, u.name, u.email, u.created_at, u.updated_at from users u join files f on u.avatar_id=f.id`
    );

    return users;
  }

  async getUserById(id) {
    const user = await db.query(`select * from users where id=${id}`);

    return user;
  }

  async getUserByEmail(email) {
    const user = await db.query(`select * from users where email='${email}'`);

    return user;
  }

  async hashPassword(password) {
    const password_hash = await bcrypt.hash(password, 8);

    return password_hash;
  }

  async checkPassword(password, password_hash) {
    return bcrypt.compare(password, password_hash);
  }

  async update(id, json) {
    const { name, email, password, avatar_id } = json;

    if (name) {
      await db.query(`update users set name='${name}' where id=${id}`);
    }

    if (email) {
      await db.query(`update users set email='${email}' where id=${id}`);
    }

    if (password) {
      const password_hash = await this.hashPassword(password);

      await db.query(
        `update users set password_hash='${password_hash}' where id=${id}`
      );
    }

    if (avatar_id) {
      await db.query(`update users set avatar_id=${avatar_id} where id=${id}`);
    }

    const user = await db.query(`select * from users where id=${id}`);

    return user;
  }
}

export default new User();
