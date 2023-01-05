const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Users = require("../models/usersModel");
const Admin = require("../models/adminModel");

const protect = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // jet Token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify Token
            const decoded = jwt.verify(token, process.env.AUTH_JWT_SECRET);

            // Get The Verified user
            req.user = await Users.findById(decoded.id).select("-password");
            if (!req.user) {
                res.status(401).json({
                    staus: res.statusCode,
                    message: "Non  authorized user",
                });
                return
            }
            next();
        } catch (err) {
            console.log(err);
            res.status(401).json({
                staus: res.statusCode,
                message: "Not authorized",
            });
        }
    }
    if (!token) {
        res.status(400).json({
            staus: res.statusCode,
            message: "No token",
        });
    }
});

const protectAdmin = asyncHandler(async (req, res, next) => {
    let token;
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            // jet Token from header
            token = req.headers.authorization.split(" ")[1];

            // Verify Token
            const decoded = jwt.verify(token, process.env.AUTH_JWT_SECRET);

            // Get The Verified user
            req.user = await Admin.findById(decoded.id);
            if (!req.user) {
                res.status(401).json({
                    staus: res.statusCode,
                    message: "Non  authorized user",
                });
                return
            }
            next();
        } catch (err) {
            console.log(err);
            res.status(401).json({
                staus: res.statusCode,
                message: "Not authorized",
            });
        }
    }
    if (!token) {
        res.status(400).json({
            staus: res.statusCode,
            message: "No token",
        });
    }
});

module.exports = { protect, protectAdmin };
