const {getCharacters}=require('../controllers/charactersRouter')

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

module.exports={
    charactersHandler,
}