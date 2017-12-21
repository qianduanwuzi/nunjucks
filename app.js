var express = require('express');

var moment = require('moment'); // 格式化时间

var path = require('path');

var logger = require('morgan'); // 日志

var bodyParser = require('body-parser'); // post 解析

var app = express();

app.use(logger('dev'))

app.use(express.static(path.join(__dirname, 'public'))) // 托管静态文件

app.use(bodyParser.urlencoded({ extended: true }));

var nunjucks = require('nunjucks').configure(path.join(__dirname, 'views'), { // 模板视图目录
    autoescape: true,
    express: app
})

// 自定义过滤器
nunjucks.addFilter('format_date', (date, format_str = 'YYYY-MM-DD') => {
    return moment(date).format(format_str)
})

app.set('view engine', 'html')


