const { postFav, deleteFav, postFavcomic, deleteFavcomic } = require('../controllers/favoritesRouter')

const postFavHandler = async (req, res) => {
    const { type } = req.query
    const { id, name, comics, title, image, creators, idComic, idCard,text } = req.body

    try {

        if (type === "comic") {
            const allFavorites = await postFavcomic(idCard, idComic, title, creators, image,text);
            return res.status(201).json(allFavorites)
        }

        const allFavorites = await postFav(id, name, image);
        return res.status(201).json(allFavorites)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message })
    }

}

const deleteFavHandler = async (req, res) => {
    const { id } = req.params
    const { type,idCard } = req.query
    try {

        if (type === "comic") {
            const allFavorites = await deleteFavcomic(idCard, id);
            return res.status(201).json(allFavorites)
        }
        const allFavorites = await deleteFav(id);

        return res.status(200).json(allFavorites)

    } catch (error) {
        console.log(error.message)
        return res.status(500).json({ error: error.message })
    }

}

module.exports = {
    postFavHandler,
    deleteFavHandler
};