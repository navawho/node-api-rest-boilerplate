import File from '../models/File';

const file = new File();

class FileController {
  async store(req, res) {
    const { originalname: name, filename: path } = req.file;

    const { rows } = await file.create(name, path);

    return res.json(rows[0]);
  }
}

export default new FileController();
