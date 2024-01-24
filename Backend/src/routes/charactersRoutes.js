const { Router } = require('express');

const charactersRouter = Router();


charactersRouter.get('/',(req,res)=>{
    return res.status(200).send("hola")
}); 


module.exports = charactersRouter;