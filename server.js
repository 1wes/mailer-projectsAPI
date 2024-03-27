const express=require('express');
const app=express();
const cors=require('cors');
const { port }=require('./env-config');
const projects=require('./projects');
const sendMail=require('./mail');
const project = require('./project');
const pithoneMail = require('./pithone-mail');

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({
    origin:["http://localhost:5173", "https://pithone-international.onrender.com", "https://pithone.co.ke", "https://1wes.github.io", "https://okemwawes.onrender.com"]
}));

app.use("/", sendMail);
app.use('/', projects);
app.use('/', project);
app.use('/', pithoneMail);

app.listen(port, ()=>{
    console.log(`Server started at port ${port}`); 
});