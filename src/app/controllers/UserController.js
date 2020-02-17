import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string()
        .required()
        .min(6),
      confirmPassword: Yup.string()
        .required()
        .when('password', (password, field) =>
          password ? field.required().oneOf([Yup.ref('password')]) : field
        ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { name, email, password } = req.body;

    const userExists = await User.getUserByEmail(email);

    if (userExists.rowCount === 1) {
      return res.status(400).json({ error: 'Usuário já existe.' });
    }

    const password_hash = await User.hashPassword(password);

    const { rows } = await User.create(name, email, password_hash);

    const { id, admin } = rows[0];

    return res.json({
      id,
      name,
      email,
      admin,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string(),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation fails' });
    }

    const { email: oldEmail, oldPassword } = req.body;

    const { rows } = await User.getUserById(req.userId);

    const user = rows[0];

    if (oldEmail && oldEmail !== user.email) {
      const userExists = await User.getUserByEmail(oldEmail);

      if (userExists.rowCount === 1) {
        return res.status(400).json({ error: 'Usuário já existe.' });
      }
    }

    if (
      oldPassword &&
      !(await User.checkPassword(oldPassword, user.password_hash))
    ) {
      return res.status(401).json({ error: 'As senhas não correspondem.' });
    }

    const userUpdated = await User.update(req.userId, req.body);

    const { id, name, email, admin } = userUpdated.rows[0];

    return res.json({
      id,
      name,
      email,
      admin,
    });
  }

  async index(req, res) {
    const { rows } = await User.getUsers();

    return res.json(rows);
  }
}

export default new UserController();
