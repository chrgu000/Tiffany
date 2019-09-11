const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  user_name: { type: String },
  user_password: {
    type: String,
    // select: false,
    // set(val) {
    //   return require('bcrypt').hashSync(val, 10)
    // }
  },
  user_id: {type: String},
  user_mobile: {type: String},
  user_type: {type: String},
  user_headimg: {type: String},
  user_status: {type: String},
  buyer_name: {type: String},
  user_token: {type: String},
  invite_code: {type: String},
  order_status: {type: String},
  share_status: {type: String},
  password_status: {type: String},
  order_real_status: {type: String},

})

module.exports = mongoose.model('User', schema)