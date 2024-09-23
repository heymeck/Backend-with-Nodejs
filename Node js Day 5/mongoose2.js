const express=require('express');
const app=express();

const db=require('../db');
const menuItem=require('./model/menuItem');

const bodyParser=require('body-parser');
app.use(bodyParser.json())


app.post('/menuItem',async (req,res)=>{
    try{
        const data=req.body;
        const NewmenuItem=new menuItem(data);

        const itemSaving= await NewmenuItem.save();
        console.log('Item saved',itemSaving);
        res.status(200).json(itemSaving)
    }catch(error){
        console.log(error);
        res.status(500).json('Internal server error')
    }
})
app.get('/menuItem',async (req,res)=>{
    try {
        const find= await menuItem.find();
        console.log('Menu fetched');
        res.status(200).json(find)
    } catch (error) {
        console.log(error);
        res.status(500).json(error);
    }
})

app.listen(3000,()=>{
    console.log('server is active and listening on port 3000')
})