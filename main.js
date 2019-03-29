const mongoose= require('mongoose');
const schema= require('./schema');

mongoose.connect('mongodb://localhost:27017/examenU2');

var Product= new mongoose.model('Producto', schema,'productos');

var product= new Product({
	code:'0123ABC',
	price:8,
	description:'Donitas espolvoreadas bimbo',
	quantity:30,
	minimum:15
});

var product1= new Product({
	code:'0124ABD',
	price:10,
	description:'Pingüinos marinela',
	quantity:8,
	minimum:10
});

Product.create([product, product1], (err)=>{
	if(err){
		console.log(err);
		process.exit(0);
	}
});

Product.find({}, (err, docs)=>{
	if(err){
		console.log(err);
		process.exit(1);
	}
	for(var i=0;i<docs.length;i++){
		if(docs[i].quantity<=docs[i].minimum){
			console.log(docs[i].code);
		}
	}
});
