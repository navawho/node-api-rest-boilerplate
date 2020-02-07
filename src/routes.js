import { Router } from 'express';

import ExampleController from './app/controllers/ExampleController';

const routes = new Router();

routes.get('/examples', ExampleController.index);
routes.get('/examples/:id', ExampleController.indexById);

export default routes;
