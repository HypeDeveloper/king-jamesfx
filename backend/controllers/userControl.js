const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const passwordValidator = require("password-validator");
const randomstring = require("randomstring");
const asyncHandler = require("express-async-handler");
const User = require("../models/usersModel");
const Admin = require("../models/adminModel");




// Sign up
// [public, POST /api/user/signup]
// DATA [name, username, email, country, password, inviteRefCode*]
const signUpUser = asyncHandler(async (req, res) => {
    const { name, username, email, country, password, inviteRefCode } =
        req.body;

    if (!name || !username || !email || !password || !country) {
        res.status(400).json({
            staus: res.statusCode,
            message: "Fill in all required fields",
        });
    }
    // check and validate username
    let usernameSchema = new passwordValidator();
    usernameSchema.is().min(6).has().not().spaces();
    var regexUser = /^[A-Za-z0-9 ]+$/.test(username);
    const validateUsername = usernameSchema.validate(username);

    if (!validateUsername || !regexUser) {
        res.status(400).json({
            staus: res.statusCode,
            for: "username",
            message: "Username min of 6 char no spaces and no symbol",
        });
        return
    }
    const usernameUsed = await User.findOne({ username });
    if (usernameUsed) {
        res.status(400).json({
            staus: res.statusCode,
            for: "username",
            message: "Username is already in use",
        });
        return;
    }

    // check if email is taken
    const emailUsed = await User.findOne({ email });
    if (emailUsed) {
        res.status(400).json({
            staus: res.statusCode,
            for: "email",
            message: "Email is already in use",
        });
        return;
    }

    // Validate User Password
    let schema = new passwordValidator();
    schema.is().min(8).has().not().spaces();
    const validatePassword = schema.validate(password);
    if (!validatePassword) {
        res.status(400).json({
            staus: res.statusCode,
            for: "password",
            message: "Password max of 8 char and no spaces",
        });
        return;
    }
    // Hash User Password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Generate User RefCode
    const refRand = randomstring.generate({
        length: 8,
        charset: "alphanumeric ",
    });
    const genUserRefCode = `${username}-${refRand}`.replace(/\s/g, "");

    // Check if invite code exisits
    let inviteId;
    const inviteCodeToUser = await User.findOne({ inviteRefCode });
    console.log(inviteCodeToUser);
    if (inviteRefCode) {
        if (inviteCodeToUser) {
            const { inviteCount, _id } = inviteCodeToUser;
            await User.findOneAndUpdate(
                { inviteRefCode },
                {
                    inviteCount: inviteCount + 1,
                }
            );
            inviteId = _id;
        } else {
            res.status(400).json({
                staus: res.statusCode,
                for: "RefCode",
                message: "Invalid Token",
            });
            return;
        }
    }

    // Add user to data base
    const user = await User.create({
        name,
        username,
        email,
        country,
        password: hashedPassword,
        userRefCode: genUserRefCode,
        inviteRefCodeID: inviteId,
        inviteCount: 0,
        amount:0,
        pack: 'Starter'
    });

    if (user) {
        res.status(201).json({
            _id: user.id,
            token: generateJWT(user._id),
            user: {
                username: user.username,
                email: user.email,
                name: user.name,
                userRefCode: user.userRefCode,
                pack: user.pack,
                inviteCount: user.inviteCount,
            },
        });
    } else {
        res.status(400);
        throw new Error("Invalid User data");
    }
})

// Sign in
// [public, POST /api/users/signin]
// DATA [email, password]
const signInUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        res.status(200).json({
            _id: user.id,
            token: generateJWT(user._id),
            user: {
                username: user.username,
                email: user.email,
                name: user.name,
            },
        });
    } else {
        res.status(400).json({
            staus: res.statusCode,
            for: "login",
            message: "Invalid email or password",
        });
    }
})

// Get my data
// [private, GET /api/users/me]
// DATA [userTOKEN]
const getMyData = asyncHandler(async (req, res) => {
    const {
        _id,
        email,
        name,
        username,
        amount,
        inviteCount,
        userRefCode,
        pack,
    } = await User.findById(req.user.id);
    res.status(200).json({
        _id: _id,
        token: generateJWT(_id),
        user: {
            username: username,
            email: email,
            name: name,
            amount: amount,
            inviteCount: inviteCount,
            userRefCode: userRefCode,
            pack: pack,
        },
    });
})

// Get all users
// [private, GET /api/admin/users]
// DATA [adminTOKEN]
const getAllUsers = asyncHandler(async (req, res) => {
    const users = await User.find().select("-password");

    res.status(200).json({
        users
    });
});

const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.AUTH_JWT_SECRET, {
        expiresIn: "30d",
    });
};

const updatePackage = asyncHandler(async(req, res)=>{
    const {updateTo} = req.body
    const {id} = req.user.id
    if(!updateTo){
        res.status(400).json({
            message: 'field not complete'
        })
        return
    }
    if(!id){
        res.status(400).json({
            message: 'no id'
        })
        return
    }
    const updateUserpack = await User.findByIdAndUpdate(id, {pack: updateTo});

    if(updateUserpack){
        res.status(201).json({
            message: 'Upgrade success'
        })
    }else{
        res.status(400).json({
            message: 'null'
        })
    }


})

module.exports = {
    signUpUser,
    signInUser,
    getAllUsers,
    getMyData,
    updatePackage
};