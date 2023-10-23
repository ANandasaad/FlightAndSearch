
const CityService = require("../services/city-service.js");


const create= async (req,res)=>{
    try {
        const {name}=req.body;
        console.log(name);
         const city= await CityService.createCity(name);
         res.json({
             success:true,
             message:"Create city successfully",
             data:city
         })
    } catch (error) {
         console.log(error)
    }

}

const destroy= async(req,res)=>{
    try {
        const city=  await CityService.deleteCity(req.params.id);
        res.json({
            success:true,
            message:"Delete city successfully",
            data:city
        })
    } catch (error) {
        console.log(error)
    }

}

const update= async (req,res)=>{
    try {
        const {name}=req.body;
        const {id}=req.params;
        const update= await CityService.updateCity( id,name);
        res.json({
            success:true,
            message:"Update city successfully",
            data:update
        })
    } catch (error) {
        console.log(error)
    }

}
const get= async (req,res)=>{
    try {
        const getAll= await CityService.getAllCities();
        res.json({
            success:true,
            message:"Get all city successfully",
            data:getAll
        
        })
    } catch (error) {
        console.log(error)
    }

}

module.exports={
    create,
    destroy,
    update,
    get
}