const fs=require('fs')
const express=require('express')
const app=express();
//add middleware
app.use(express.json())
const tours=JSON.parse(fs.readFileSync(`${__dirname}/package.json`))
//get request
app.get('/api/v1/tours',(req,res)=>{
    res.status(200).json({message:'success',result:tours.length,data:{tours}})
})
//post request
app.post('/api/v1/tours',(req,res)=>{
    const newId=tours[tours.length-1].id+1;
    const newTour=Object.assign({id:newId},req.body);
    tours.push(newTour)
    fs.writeFile(`${__dirname}/package.json`,JSON.stringify(tours),err=>{
        res.status(200).json({message:'success',data:{tour:newTour}})
    })
    console.log(req.body)
    res.send('ok')
})
const port=8000
app.listen(port ,()=>{
    console.log(`the port:${port}`)
})