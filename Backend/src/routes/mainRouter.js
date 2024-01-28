const { Router } = require('express');
const charactersRouter=require('./charactersRoutes');
const favoriteRouter=require('./favoritesRoutes')

const mainRouter = Router();

mainRouter.use("/characters",charactersRouter);
mainRouter.use("/favorite",favoriteRouter);



module.exports = mainRouter;
