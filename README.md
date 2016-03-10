
application created by [ThinkJS](http://www.thinkjs.org)

本项目只做教程演示及初学者入门之用

![image](https://raw.githubusercontent.com/livisky/usermanagement/master/demo.png)

## 导入根目录下数据库文件test.sql

在src/common/config/db.js里配置数据库信息
```
mysql: {
      host: '127.0.0.1',
      port: '3306',
      database: 'test',
      user: 'root',
      password: 'root',
      prefix: 'li_',
      encoding: 'utf8'
    }
```

## 安装依赖包

```
npm install
```

## 编译thinkjs项目

```
npm run compile
```

## 启动项目

```
npm run start
```

##访问路径
```
http://localhost:8361/index/index
```        
