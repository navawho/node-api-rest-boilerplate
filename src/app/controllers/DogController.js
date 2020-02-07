import Dog from '../models/Dog';

const dog = new Dog();

class DogController {
  async index(req, res) {
    const { rows } = await dog.getDogs();

    return res.json(rows);
  }

  async indexById(req, res) {
    const { id } = req.params;

    const { rows } = await dog.getDogById(id);

    return res.json(rows[0]);
  }

  async store(req, res) {
    const { name, description, sex } = req.body;

    const { rows } = await dog.create(name, description, sex);

    return res.json(rows[0]);
  }
}

export default new DogController();
