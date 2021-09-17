const mongoose = require('mongoose');
const { isEmail } = require('validator');
const bycrpt = require('bcrypt');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, 'Please enter an email'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Please enter a valid email']    
  }, 
  password: {
    type: String,
    required: [true, 'Please enter a password'],
    minlength: [6, 'Minimum password length is 6 characters']    
  }   
});

userSchema.pre('save', async function(next) {
  const salt = await bycrpt.genSalt(); 
  this.password = await bycrpt.hash(this.password, salt) 
  next();   
})

const User = mongoose.model('user', userSchema);

module.exports = User;