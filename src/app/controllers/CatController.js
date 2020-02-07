import Cat from '../models/Cat';

const cat = new Cat();

class CatController {
  async index(req, res) {
    const { rows } = await cat.getCats();

    return res.json(rows);
  }

  async indexById(req, res) {
    const { id } = req.params;

    const { rows } = await cat.getCatById(id);

    return res.json(rows[0]);
  }

  async store(req, res) {
    const { name, description, sex } = req.body;

    const { rows } = await cat.create(name, description, sex);

    return res.json(rows[0]);
  }
}

export default new CatController();
