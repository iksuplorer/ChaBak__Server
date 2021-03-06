var express = require('express');
var router = express.Router();

//전체 리스트 조회
router.use("/", require("./list"));
//좋아요 리스트 조회 & 상세 좋아요 or 좋아요 취소
router.use("/like", require("./like"));
//상세 뷰 조회
router.use("/detail", require("./detail"));

module.exports = router;