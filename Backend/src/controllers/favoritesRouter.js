const { Favorites } = require('../db')

const postFav = async (id, name, image) => {
 
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

const deleteFav = async (id) => {
    console.log(id)
    await Favorites.destroy({ where: { id } })

    const allFavorites = await Favorites.findAll();

    return allFavorites

}

const postFavcomic = async (idCard, idComic, title, creators, image,text) => {

    const newComicArray = [idCard, idComic, title, creators, image,text]

    const existingFav = await Favorites.findOne({ where: { id: idCard } });

    if (existingFav) {
        // Convertir backups a un array
        const currentComics = Array.isArray(existingFav.comics)
            ? existingFav.comics
            : Object.values(existingFav.comics);

        const updatedBackups = [...currentComics, newComicArray];

        await Favorites.update(
            { comics: updatedBackups },
            { where: { id: idCard } }
        )

        const allFavorites = await Favorites.findAll();
        return allFavorites
    }
}

const deleteFavcomic = async (idCard, idComic) => {

    const existingFav = await Favorites.findOne({ where: { id: idCard } });

    if (existingFav) {
        // Convertir backups a un array
        const currentComics = Array.isArray(existingFav.comics)
            ? existingFav.comics
            : Object.values(existingFav.comics);
        console.log(currentComics)
        console.log(idComic)
        
        const updatedBackups = currentComics.filter(comic => {
            return Number(comic[1]) !== Number(idComic);
        });
        console.log(updatedBackups)
        await Favorites.update(
            { comics: updatedBackups },
            { where: { id: idCard } }
        )
        const allFavorites = await Favorites.findAll();
        return allFavorites
    }

}

module.exports = {
    postFav,
    deleteFav,
    postFavcomic,
    deleteFavcomic
};