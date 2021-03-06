const mongoose = require('mongoose')

//	@AutoIncKey
const schema = new mongoose.Schema({
  user_id: {
    type: String,
    index: true,
  },
  uid: {type: String},
  user_name: { type: String },
  user_password: {
    type: String,
    // select: false,
    // set(val) {
    //   return require('bcrypt').hashSync(val, 10)
    // }
  },
  user_mobile: {type: String},
  user_type: {type: String},
  user_headimg: {type: String},
  bg_img : {type: String},
  sign_text : {type : String},
  user_status: {type: String},
  sex : {type: String},
  buyer_name: {type: String},
  user_token: {type: String},
  invite_code: {type: String},
  order_status: {type: String},
  share_status: {type: String},
  password_status: {type: String},
  order_real_status: {type: String},
  follow: {type: Number},
  birthday:{type: String},
  qq : {type: String},
  weixin : {type: String},
  email : {type: String},
})

module.exports = mongoose.model('User', schema)