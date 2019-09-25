const mongoose = require('mongoose')


const schema = new mongoose.Schema({
  
    mliveId: {type: String},
    mliveTitle: {type: String},
    mHosterId: {type: String},
    mRtmpPushUrl: {type: String},
    mRtmpPullUrl: {type: String},
    mHlsUrl: {type: String},
    mLiveTopic: {type: String},
    mMemNumber: {type: Number},
    headerUrl: {type: String},
    bgImageUrl: {type: String},
    nickName: {type: String},	
	


})

module.exports = mongoose.model('Live', schema)