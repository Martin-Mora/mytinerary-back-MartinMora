const validator = (schema)=>(req,res,next) =>{

  const validation = schema.validate(req.body, { abortEarly:true })

  if(validation.error){
  console.log(validation);
  return res.json(validation.error)
}

return next()
}

export default validator;