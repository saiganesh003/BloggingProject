import {db} from "../db.js";
import bcrypt from "bcryptjs";
import cors from "cors";


export const register = (req,res)=>{
    
    // // res.json("This is controller register")
    // // CHECKING IF USER EXISTS
    // const q="SELECT * FROM users WHERE email=? OR username=?";
    // db.query(q,[req.body.email,req.body.username],(err,data)=>{
    //     if(err) res.json(err+" errorHere")
    //     if(data.length) return res.status(409).json("User Already Exists");

    //     //HASHING PASSWORD

    //     var salt = bcrypt.genSaltSync(10);
    //     var hash = bcrypt.hashSync(req.body.password, salt);

    //     const q="INSERT INTO users(`username`,`email`,`password`) VALUES (?)"
    //     const values=[
    //         req.body.username,
    //         req.body.email,
    //         hash,
    //     ]

    //     db.query(q,[values],(err,data)=>{
    //         if(err)return res.json(err+" errorhere");
    //         res.status("200").json("User has been Created");
            
    //     });
    // });

    //CHECK EXISTING USER
    const q = "SELECT * FROM users WHERE email = ? OR username = ?";

    db.query(q, [req.body.email, req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists!");

        //Hash the password and create a user
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(`username`,`email`,`password`) VALUES (?)";
        const values = [req.body.username, req.body.email, hash];

        db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been created.");
        });
    });

}

export const login = (req,res)=>{
    res.json("From controller login")
}

export const logout = (req,res)=>{
    res.json("From controller logout")
}
