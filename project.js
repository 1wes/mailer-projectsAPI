const express=require('express');
const router=express.Router();
const projects=require('./projectsList');

router.get(`/project/:id`, (req, res)=>{

    var id=parseInt(req.params.id);
    
    const project=projects.find(project=>

        project.id===id
    )

    project?res.send(project):res.sendStatus(404);

});
module.exports=router;