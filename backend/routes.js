const express = require("express");
const router = express.Router();
// Routes Users
const {signInUser, signUpUser, getMyData, getAllUsers} = require('./controllers/userControl');
const { protect, protectAdmin } = require("./middleware/authMiddleware");
const { createNewRole, loginAdmin, deleteUser } = require("./controllers/adminControl");
const {createTransfare,allTransfaresAdmin,getAllTransfaresUser,updateTransfareOrder} = require("./controllers/transactionControl");

// users routes [start]
router.post("/users/signin",  signInUser);
router.post("/users/signup", signUpUser);
router.get("/users/me", protect, getMyData);
// [end]


// admin routes [start]
router.get("/admin/users",protectAdmin, getAllUsers);
router.post("/admin/new", createNewRole);
router.post("/admin/signin", loginAdmin);
router.delete("/admin/del/user", protectAdmin, deleteUser);
// [end]


// trnsfare routes [start]
router.get("/admin/trans", protectAdmin, allTransfaresAdmin);
router.get("/users/trans/me", protect, getAllTransfaresUser);
router.post("/users/trans/new", protect, createTransfare);
router.post("/admin/trans/confirm", protectAdmin, updateTransfareOrder);
// [end]

module.exports = router