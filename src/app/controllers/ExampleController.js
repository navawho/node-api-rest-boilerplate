import Album from '../models/Album';

const album = new Album();

class AlbumController {
  async index(req, res) {
    const { rows } = await album.getAlbums();
    return res.json(rows);
  }

  async indexById(req, res) {
    const id = req.params.id;

    const { rows } = await album.getAlbumsById(id);

    return res.json(rows);
  }
}

export default new AlbumController();
