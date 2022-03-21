const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');

router.post('/signup', async (req,res) => {

	const {email,password} = req.body;
	
try{
	const user = new User({email,password});
	await user.save();
	const token = jwt.sign({userId:user._id}, 'My_Secret_Key');
	res.send({token});
}catch(err){
	return res.status(422).send(err.message);
}
});

module.exports = router; 