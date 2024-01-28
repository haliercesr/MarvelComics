const { Router } = require('express');
const {postFavHandler,deleteFavHandler}=require('../handlers/favoritesRouterHandler')

const favoritesRoutes = Router();


favoritesRoutes.post('/fav', postFavHandler);
favoritesRoutes.delete('/fav/:id',deleteFavHandler);


module.exports = favoritesRoutes;