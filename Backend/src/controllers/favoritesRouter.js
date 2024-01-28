const { Favorites } = require('../db')

const postFav = async (id,name,image) => {

    if (id === 0) {
        const allFavorites = await Favorites.findAll();
        return allFavorites
    }

    await Favorites.findOrCreate({
        where: { id, name, image },
    })

    const allFavorites = await Favorites.findAll();
    return allFavorites
}

const deleteFav= async (id)=>{

    await Favorites.destroy({where:{id}})

    const allFavorites= await Favorites.findAll();

    return allFavorites

}

module.exports={
    postFav,
    deleteFav,
};