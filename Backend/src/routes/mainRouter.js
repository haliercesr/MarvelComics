const { Router } = require('express');
const charactersRouter=require('./charactersRoutes');

const mainRouter = Router();

mainRouter.use("/characters",charactersRouter);

module.exports = mainRouter;
