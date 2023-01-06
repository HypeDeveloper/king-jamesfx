const Trans = require("../models/transactionModel");
const User = require("../models/usersModel");
const Admin = require("../models/adminModel");
const asyncHandler = require("express-async-handler");


// get trans admin
// [private, GET /api/admin/trans]
// DATA []
const allTransfaresAdmin = asyncHandler(async (req, res) => {
    const trans = await Trans.find();
    res.status(200).json(trans);
});

// get trans user
// [private, GET /api/users/trans/me]
// DATA []
const getAllTransfaresUser = asyncHandler(async (req, res) => {
    const trans = await Trans.find({ user: req.user.id });
    res.status(200).json(trans);
});


// create new transfare
// [private, POST /api/users/trans/new]
// DATA [transType]
const createTransfare = asyncHandler(async (req, res) => {
    const { transType, name } = req.body;
    if (!transType || !name) {
        res.status(400).json({
            staus: res.statusCode,
            for: "trans update",
            message: "Fill in all fields",
        });
        return;
    }
    

    const trans = await Trans.create({
        user: req.user.id,
        name: name,
        transType: transType,
        status: "pending",
    });
    
    if (trans) {
        res.status(200).json(trans);
    } else {
        res.status(400).json({
            status: res.statusCode,
            for: "login",
            message: "Invalid trans data",
        });
    }
});

// update The recived transfare
// [private, POST /api/admin/trans/confirm]
// DATA [orderId, price]
const updateTransfareOrder = asyncHandler(async (req, res) => {
    const { orderId, price } = req.body;
    if (!orderId || !price) {
        res.status(400).json({
            staus: res.statusCode,
            for: "trans update",
            message: "Fill in all fields",
        });
        return
    }
    const order = await Trans.findById(orderId);
    const user = await User.findById(order.user);//passed
    console.log(order, "\n", user, "\n\n", user.amount);
    if (!user || !order) {
        res.status(400).json({
            staus: res.statusCode,
            for: "trans update",
            message: "User or Order not found",
        });
        return
    }
    if (order.status !== "pending") {
        res.status(400).json({
            staus: res.statusCode,
            for: "trans update",
            message: "Order has been completed",
        });
        return
    }
    
    await Trans.findByIdAndUpdate(orderId, { status: "Complete" });
    await User.findByIdAndUpdate(user._id, {
        amount: user.amount + parseInt(price),
    });

    const getorder = await Trans.findById(orderId);
    const getuser = await User.findById(order.user);

    res.status(200).json({
        updateOrder: getorder,
        updateUser: getuser,
    });
});

module.exports = {
    createTransfare,
    allTransfaresAdmin,
    getAllTransfaresUser,
    updateTransfareOrder,
};
