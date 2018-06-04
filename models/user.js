import mongoose from "mongoose"
import bcrypt from "bcrypt";

const userSchema = mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.pre('save', next => {
    var user = this;
    bcrypt.hash(user.password, 10, function(err, hash){
		if (err) {
			return next(err);
		}
		
		user.password = hash;
		next();
	});
});

export default userSchema;