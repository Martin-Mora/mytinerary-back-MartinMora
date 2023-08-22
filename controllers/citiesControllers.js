import City from '../models/City.js';

const citiesControllers = {
  getAllCities: async(req,res,next) =>{
    let allCities;
    let error=null;
    let sucesss=true;

    try{
      allCities= await City.find()
      res.json({
        response:allCities,
        sucesss:true,
        error: null
      })

    }catch(err){
      success = false;
      error = err;
      next(err)
    }

  },

  getOneCity:async(req,res,next) =>{


    const { id } = req.params;
  
    let newCityId;
    let error=null;
    let sucesss=true;

    try{
      newCityId= await City.findById(id)
    }catch(err){
      console.log(err);
      success = false;
      error = err;
    }

    res.json({
      response:newCityId,
      sucesss,
      error
    })
  },

  createOneCity: async(req,res,next)=>{
   
    let newCity;
    let error=null;
    let sucesss=true;

    try{
      
      newCity =await City.create(req.body);
      console.log(newCity);

     
    }
    catch(err){
      console.log(err),
        sucesss=false,
        error= err
      
    }
    
    res.json({
      response:newCity,
      sucesss,
      error
    })
  },

  updateOneCity : async(req, res, next) => {
    const { id } = req.params
    let updateCity;
    let success = true;
    try {
        updateCity = await City.findOneAndUpdate( {_id: id}, req.body, { new: true } )
        res.json({
            response: updateCity,
            success
        })
    } catch (err) {
        success = false;
        next(err)
    }
    
},

deleteOneCity : async(req, res, next) => {
  const { id } = req.params
  let deleteCity;
  let success = true;
  try {
      deleteCity = await City.findOneAndDelete( {_id: id} )
      res.json({
          response: deleteCity,
          success
      })
  } catch (err) {
      success = false;
      next(err)
  }
},
}

export default citiesControllers