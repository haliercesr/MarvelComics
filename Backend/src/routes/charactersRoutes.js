const { Router } = require('express');
const {charactersHandler,characterIdHandler,characterComicsHandler}=require('../handlers/charactersRouterHandler')

const charactersRouter = Router();


charactersRouter.get('/',charactersHandler);
charactersRouter.get('/:id',characterIdHandler);
charactersRouter.get('/:id/comics',characterComicsHandler);


module.exports = charactersRouter;