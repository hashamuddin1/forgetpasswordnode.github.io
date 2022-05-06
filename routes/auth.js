const express = require("express");
const router = express.Router();
const { signup, forgetpasswordrender, resetpassword, forgetpassword } = require("../controllers/auth");
const checkAuth = require("../middleware/check_auth")

router.post('/signup', signup);
router.get('/password/reset', forgetpasswordrender)
router.put('/forgetpassword', forgetpassword)
router.put('/resetpassword', resetpassword)
module.exports = router;