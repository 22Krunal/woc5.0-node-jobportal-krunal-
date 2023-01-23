const StudentModel = require('../Models/Student');
const bcrypt = require('bcrypt');

module.exports.getStudents = async function getStudents(req,res){
    let data = await StudentModel.find();
    console.log(data);
    res.send('hello students');
    res.end();
}
module.exports.postStudent = async function postStudent(req,res){
    let pdata = req.body
    console.log(pdata);
    let data = await StudentModel.create({
        FirstName:pdata.FirstName,
        MiddleName:pdata.MiddleName,
        LastName:pdata.LastName,
        Id:pdata.Id,
        Contact:pdata.Contact,
        Address:pdata.Address,
        Batch:pdata.Batch,
        SPI:pdata.Spi,
        email : pdata.Email,
        password : pdata.Password
        // {,MiddleName,LastName,email,contact,Id,address,batch,spi}
    })
    // console.log(data);
    if(data){
        res.json({success:true,message:"Student is Registered Successfully!!"})
    }
    else{
        res.json({success:false,message:"Student is Registered Successfully!!"})     
    }
    
    // res.end();
}

module.exports.deleteStudent = async function deleteStudent (req,res){
    let data = req.body;
    let result = await StudentModel.findOneAndRemove({email:data.Email});
    res.json({result,message:"User deleted successfully!!!"});
}

module.exports.loginStudent = async function loginStudent (req,res){
    let data = req.body;
    let result = await StudentModel.findOne({email:data.Email});
    if(result){
        const flag = await bcrypt.compare(data.Password,result.password);
        if(flag){
            res.json({success:true,message : "Successfully Logged in"});
        }
        else{
            res.json({success:false,message : "Password dosen't match"});
        }
    }
    else{
        res.json({success:false,message:"Email is not registered"});
    }
}