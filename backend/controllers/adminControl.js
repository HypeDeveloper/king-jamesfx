const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/usersModel");
const Admin = require("../models/adminModel");
const asyncHandler = require("express-async-handler");

/* 
    Role Rights
    EDIT => "READ DELETE UPDATE CREATE"
    READ => "READ ONLY"
*/

// create new role
// [public, POST /api/admin/new]
// DATA [role, token, rights]
const createNewRole = asyncHandler(async (req, res) => {
    const {role,token, rights} = req.body
    if (!token || !role || !rights) {
        res.status(400).json({
            staus: res.statusCode,
            for: "new admin role",
            message: "Fill in all fields",
        });
        return
    }
    const adminExists = await Admin.findOne({ role });
    if (adminExists !== null) {
        res.status(400).json({
            staus: res.statusCode,
            for: "new admin role",
            message: "The role already exists",
        });
        return
    }

    const roleInfo = rights.split(" ");
    if (roleInfo.length > 1) {
        res.status(400).json({
            staus: res.statusCode,
            for: "new admin role",
            message: "Only one role should be given",
        });
        return;
    }

    const salt = await bcrypt.genSalt(10);
    const hashedtoken = await bcrypt.hash(token, salt);

    const admin = await Admin.create({
        role,
        token: hashedtoken,
        rights,
    })


    if (admin) {
        res.status(201).json({
            adminId: admin.id,
            tokenID: generateJWT(admin.adminId),
            rights: roleInfo[0] !== "EDIT" ? "READ" : "EDIT",
        });
    } else {
        res.status(400).json({
            staus: res.statusCode,
            for: "new admin role",
            message: "Invalid Fields",
        });
    }
})


// create new role
// [public, POST /api/admin/signin]
// DATA [role, token]
const loginAdmin = asyncHandler(async (req, res) => {
    const { token, role } = req.body;

    const admin = await Admin.findOne({ role });
    if (!admin) {
        res.status(400).json({
            staus: res.statusCode,
            for: "Admin SignIn",
            message: "role does not exsist",
        });
        return;
    }

    // Check admin token
    if (await bcrypt.compare(token, admin.token)) {
        res.json({
            _id: admin.id,
            tokenID: generateJWT(admin._id),
            right: admin.rights,
        });
    } else {
        res.status(400).json({
            staus: res.statusCode,
            for: "admin login",
            message: "Invalid role or token",
        });
    }
});


// create new role
// [public, POST /api/admin/del/user]
// DATA [role, token, rights]
const deleteUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.body.id)

    if (user) {
        User.findByIdAndDelete(user._id)
        res.status(200).json({
            message: 'User deleted'
        })
    }
    else {
        res.status(400).json({
            staus: res.statusCode,
            for: "admin delete",
            message: "User does not exist",
        });
    }
})

const generateJWT = (id) => {
    return jwt.sign({ id }, process.env.AUTH_JWT_SECRET, {
        expiresIn: "90d",
    });
};


module.exports = {
    loginAdmin,
    createNewRole,
    deleteUser,
};