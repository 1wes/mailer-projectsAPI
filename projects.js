const express=require('express');
const router=express.Router();
const projects=require('./projectsList');

router.get('/projects', (req, res)=>{
    
    res.send(projects)

});

module.exports=router;