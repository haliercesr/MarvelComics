const axios=require("axios");
require("dotenv").config();
const { ts,apikey,hash } = process.env;
const {URLAPI}=require('../configURL')

const getCharacters=async()=>{
    
    const response=await axios.get(`https://gateway.marvel.com/v1/public/characters?ts=1000&apikey=5f15e9db3871a39ded348aae25bfdffa&hash=b04eebb93204672cd6f26886dcf764e0`)
    return response
}

module.exports={
    getCharacters,
}