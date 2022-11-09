const Router=require('express').Router();
const routerCont=require('../controllers/resumecontroller');
const multer=require('multer')();

// @api: '/resume/upload'  desc: api for accepting resumes
Router.post('/upload',multer.single('resume'),routerCont.uploadResume);


Router.get('/submissions',routerCont.getAllSubmissions);


module.exports=Router;