const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
// const port = process.env.PORT || 2000;
const mongoose = require("mongoose");
const User = require("./User");
const Hotel = require("./hotel");
const cors = require("cors");


app.use(express.json());
app.use(cors());

// const uriLink = "mongodb+srv://demo:demo@cluster0.qzpfh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const uriLink = "mongodb+srv://demo:demo@cluster0.qzpfh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


mongoose.connect(uriLink,{useNewUrlParser: true,
    useUnifiedTopology:true})


mongoose.connection.once("open",()=>{
    console.log("Mongoose db connection successfull...")
})

mongoose.connection.on("error",(error)=>{
    console.log(error.message);
    //console.log("Mongoose db connection unsuccessfull...")
})

app.get('/list', (req, res)=>{
    res.json({
        "statusMessage" : "SUCCESS",
        "statusCode" : 200
    })
    // app.get('/register', (req, res)=>{
    //     res.render('register')
    // })

   
})


app.post('/register', async(req , res)=>
{
    const{email,password} = req.body;
    // console.log(user)
    const user = await User.create({
        email: email, 
        password : password
    })
    console.log(user)
}) 

// app.post('/add', async(req , res)=>
// {
//     const{name, place , emailid} = req.body;
//     // console.log()
//     const user = await User.create({
//         name : name,
//         place : place,
//         emailid: emailid

//     })
//     console.log()
// }) 



app.post('/login' , async(req , res) => {
    const{email , password} = req.body
    const user = await User.findOne({
        email: email
        
    })
    if (user != null) {
    
      if (password == user.password)  {
          console.log(user._id);
          const token = jwt.sign({_id: user._id}, "mudit");
          console.log(token)
          res.json({msg: "Valid User", token: token} )
      }
      else {
          res.send({msg:"Incorrect Password"})
      }

      
    }
    else {
        res.send({msg:"Invalid User"})
    }
})
const middleware = (req,res, next) =>
{ 
    console.log(req.headers)
    const {authorization} = req.headers
    console.log(authorization)
   const token = authorization
    jwt.verify(token, "mudit", (error, payload) =>{
        if (error){
            res.send(error)
        }
        console.log(payload)
        const {_id} = payload
        
        User.findById(_id).then(userdata=>{
            req.user=userdata
            next()
        })
    })
}

app.post('/add', middleware, async (req, res)=>{
    const{name , place , emailid} = req.body
    const user = await Hotel.create({
       name : name,
       place : place,
       emailid : emailid
    })
    console.log(user)
}) 




app.listen(2000,()=>{
    console.log("server is running...port no:2000")
})
