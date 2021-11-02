import mongoose from 'mongoose';
const Schema = mongoose.Schema;
import findOrCreate from 'mongoose-findorcreate';

const ProductsSchema = new Schema({
	name: {
		type: String,
		unique: true,
	},
	descripcion: String,
	codigo: String,
	foto: String,
	precio: String,
	stock: String,
	timestamp: Date,
});

ProductsSchema.plugin(findOrCreate);

export default mongoose.model('products', ProductsSchema);