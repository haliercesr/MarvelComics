const { Router } = require('express');
const {charactersHandler}=require('../handlers/charactersRouterHandler')

const charactersRouter = Router();


charactersRouter.get('/',charactersHandler); 


module.exports = charactersRouter;