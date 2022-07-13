const express=require('express')
const app=express()
app.get('/',(req,res)=>{
    //res.status(200).send('server side')
    res.status(200).json({message:'hii'})
})
app.post('/',(req,res)=>{
    res.send('hii...using post method')
})
const port=3000
app.listen(port,()=>{
    console.log(`running app:${port}`)
})