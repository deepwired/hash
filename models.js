var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  phoneNumber:  Number,
  name: String,  
});
UserSchema.plugin(timestamps);
module.exports = mongoose.model('UserSchema', MessageSchema);

var GroupSchema = new Schema({
  name:  String,
  userId: [{type: Schema.Types.ObjectId, ref: 'User'}],  
});
MessageSchema.plugin(timestamps);
module.exports = mongoose.model('MessageSchema', MessageSchema);

var MessageSchema = new Schema({
  message:  String,
  userId: {type: Schema.Types.ObjectId, ref: 'UserSchema'},  
  groupId: {type: Schema.Types.ObjectId, ref: 'GroupSchema'},
});
MessageSchema.plugin(timestamps);
module.exports = mongoose.model('MessageSchema', MessageSchema);
