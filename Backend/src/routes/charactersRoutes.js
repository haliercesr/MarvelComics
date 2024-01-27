const { Router } = require('express');
const {charactersHandler,characterIdHandler,characterComicsHandler,ComicIdHandler}=require('../handlers/charactersRouterHandler')

const charactersRouter = Router();


charactersRouter.get('/',charactersHandler);
charactersRouter.get('/:id',characterIdHandler);
charactersRouter.get('/:id/comics',characterComicsHandler);
charactersRouter.get('/comics/:id',ComicIdHandler);


module.exports = charactersRouter;