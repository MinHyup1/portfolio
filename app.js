var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.status(200).json({
      message:"sopt 서버 여러분 안녕하세요~,sopt-Media에 좋아요와 댓글 부탁드립니다!!(꾸벅)",
  })
});

module.exports = router;