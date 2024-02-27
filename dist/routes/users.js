"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const userController_2 = require("../controller/userController");
const router = express_1.default.Router();
/* GET users listing. */
router.get("/", function (req, res) {
    res.send("respond with a resource");
});
// Endpoint for creating a new user
router.post('/createUser', userController_1.createUser);
// Endpoint for creating a new user using Google Sign-In
router.post('/createGoogleUser', userController_1.createGoogleUser);
// Enpoint for sending OTP
router.post('/send-otp', userController_1.createUser);
// Enpoint for verifying OTP
router.post('/verify-otp', userController_2.verifyCustomerOtp);
exports.default = router;
