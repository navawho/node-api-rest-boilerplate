import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import CatController from './app/controllers/CatController';
import DogController from './app/controllers/DogController';
import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/cats', CatController.index);
routes.get('/cats/:id', CatController.indexById);
routes.post('/cats', CatController.store);

routes.get('/dogs', DogController.index);
routes.get('/dogs/:id', DogController.indexById);
routes.post('/dogs', DogController.store);

routes.get('/files', FileController.index);
routes.get('/files/:id', upload.single('file'), FileController.indexById);
routes.post('/files', upload.single('file'), FileController.store);

export default routes;
