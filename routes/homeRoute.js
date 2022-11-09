const Router=require('express').Router();
const homeCont=require('../controllers/homecontroller');

// @api: '/'
Router.get('/',homeCont.homePage);

// For routes related to resume
Router.use('/resume',require('./resumeRoute'));


module.exports=Router;

