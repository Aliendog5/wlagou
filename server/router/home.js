const express = require('express');
const router = express.Router();
const mysql = require("../mysql");
const request = require("request");
var cheerio = require('cheerio');
//职位数据
router.get('/data', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
	var str = "select * from `data`";
	mysql(str, {}, function(results) {
		res.json(results)
  })
});
//详情页
router.post('/detail', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
	var str = "select * from `data` where positionId=?";
	mysql(str, [req.body.positionId], function(results) {
		res.json(results)
  })
});
// 注册
router.post('/reg', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
	mysql("INSERT INTO userinfo(`u_name`,`u_pwd`) VALUES('" + req.body.u_name + "','" + req.body.u_pwd + "')", {}, function(results) {
		res.send("注册成功");
	})

});
router.post('/', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");
	var str = "select * from `userinfo` where u_name=?";
	mysql(str, [req.body.u_name], function(results) {
		console.log(results)
		if(results.length > 0) {
			res.json({
				status: 0,
				msg: "用户名已存在"
			})
		} else {
			res.json({
				status: 1,
				msg: "可以注册"
			})
		}

	})
});
//登录
router.post('/login', function(req, res, next) {
	res.append("Access-Control-Allow-Origin", "*");

	var str = "select * from `userinfo` where u_name=? and u_pwd=?";
	mysql(str, [req.body.u_name, req.body.u_pwd], function(results) {
		res.json(results)
	})
});
//搜索
router.post('/search', function(req, res) {
	res.append("Access-Control-Allow-Origin", "*");
	var str = "select * from `data` where positionName like '%" + req.body.positionName + "%'";
	mysql(str, {}, function(result) {
		res.json(result);
	})
});
module.exports = router;
