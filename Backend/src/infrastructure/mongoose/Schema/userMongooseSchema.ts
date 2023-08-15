import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = mongoose.model('User', userSchema);
export default UserSchema;
