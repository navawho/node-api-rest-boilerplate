const db = require('../../database/pool');

class Album {
  async getAlbums() {
    const albums = await db.query(`your query`);

    return albums;
  }

  async getAlbumsById(id) {
    const album = await db.query(`your query where id=${id}`);

    return album;
  }

}

export default Album;
