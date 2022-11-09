const db=require('../config/dbsetup');

module.exports.uploadResume=async (req,res)=>{
    const data=JSON.parse(JSON.stringify(req.body));
    console.log(data)
    console.log(req.file);
    return res.send("Resume uploaded successfully");
}

module.exports.viewResume=(req,res)=>{
    
}

module.exports.deleteResume=(req,res)=>{

}

module.exports.getAllSubmissions=(req,res)=>{
    return res.render('submissionPage');
}