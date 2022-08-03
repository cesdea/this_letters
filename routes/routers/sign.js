const express =require('express');
const router = express.Router();
const { Op } = require("sequelize");
const jwt=require('jsonwebtoken');
const models = require("../../models/index");

router.post("/login",async (req,res)=>{
    const {email,password}=req.body;
    const user=await models.Users.findAll({
        where:{email}
    })
    if(user.length==0){
        return res.status(400).send("WRONG_EMAIL")
    }
    if(user.dataValues.password!=password){
        return res.status(400).send("WRONG_PASSWORD")
    }
    res.cookie('Bearer',token,{maxAge: 360000})
    const token=jwt.sign({ email: email }, "thisletter")
        res.send({
            token:token,
    });
    return res.status(200).send("SUCCESS_LOGIN")
})

router.post("/singup",async (req,res)=>{
    const
    {email,
    nickname,
    password,
    confirmPassword
    } = req.body
    const signup=await models.Users.create({
        email,
        nickname,
        password
    })
    res.status(201).send("가입성공");   
})

module.exports = router;