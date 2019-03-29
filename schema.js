const mongoose= require('mongoose');

module.exports= new mongoose.Schema({
	code:{
		type:String
	},
	price:{
		type:Number
	},
	description:{
		type:String
	},
	quantity:{
		type:Number
	},
	minimum:{
		type:Number
	},
});
