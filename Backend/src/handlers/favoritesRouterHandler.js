const {postFav,deleteFav}=require('../controllers/favoritesRouter')

const postFavHandler= async (req,res)=>{
    try{
   const{id,name,image}=req.body
   
   if (!id || !name || !image ) return res.status(401).json({error:'Faltan datos'})
    const allFavorites= await postFav(id,name,image);
    return res.status(201).json(allFavorites)

    }catch(error){
        console.log(error.message)
        return res.status(500).json({error:error.message})
    }

}

const deleteFavHandler= async (req,res)=>{
    const{id}=req.params
    try{

    const allFavorites= await deleteFav(id);

    return res.status(200).json(allFavorites)

    }catch(error){
        console.log(error.message)
        return res.status(500).json({error:error.message})
    }

}

module.exports={
    postFavHandler,
    deleteFavHandler
};