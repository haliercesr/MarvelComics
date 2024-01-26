const axios=require("axios");
require("dotenv").config();
const { ts,apikey,hash } = process.env;
const {URLAPI}=require('../configURL')

const getCharacters=async()=>{
    
    const response=await axios.get(`https://gateway.marvel.com/v1/public/characters?limit=100&ts=${ts}&apikey=${apikey}&hash=${hash}`)
    return response
}

const getbyIdCharacter=async(id)=>{
    
    const {data}=await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${apikey}&hash=${hash}`)
    return data
}

const getbyIdComics=async(id)=>{
    
    const {data}=await axios.get(`https://gateway.marvel.com/v1/public/characters/${id}/comics?ts=${ts}&apikey=${apikey}&hash=${hash}`)
    return data
}




module.exports={
    getCharacters,
    getbyIdCharacter,
    getbyIdComics
}