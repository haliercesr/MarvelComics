const {getCharacters,getbyIdCharacter,getbyIdComics,ComicsId}=require('../controllers/charactersRouter')

//GET | /characters
const charactersHandler= async (req,res)=>{
    try{
    const {data}=await getCharacters()
    return res.status(200).json(data)

} catch (error) {
    console.log(error.message)
     return res.status(400).json({ error: error.message }) 
    }
}

//GET | /characters/:id
const characterIdHandler= async (req,res)=>{
    const Id=req.params.id
    try{
    const data=await getbyIdCharacter(Id)
    
    if(!data.data.results[0].name) throw Error("Error al obtener el personaje")

    return res.status(200).json(data.data.results[0])

} catch (error) {
    console.log(error.message)
     return res.status(400).json({ error: error.message }) 
    }
}

//GET | /characters/:id/comics
const characterComicsHandler= async (req,res)=>{
    const Id=req.params.id
    try{
    const data=await getbyIdComics(Id)
    
    if(!data.data.results[0]) throw Error("Error al obtener los comics del personaje")

    return res.status(200).json(data.data.results)

} catch (error) {
    console.log(error.message)
     return res.status(400).json({ error: error.message }) 
    }
}

//GET | /comics/:id
const ComicIdHandler= async (req,res)=>{
    const Id=req.params.id
    try{
    const data=await ComicsId(Id)
    
    if(!data.data.results[0]) throw Error("Error al obtener el comic")

    return res.status(200).json(data.data.results)

} catch (error) {
    console.log(error.message)
     return res.status(400).json({ error: error.message }) 
    }
}

module.exports={
    charactersHandler,
    characterIdHandler,
    characterComicsHandler,
    ComicIdHandler,

}