# 下载最新版的kafka 
https://kafka.apache.org/downloads

# 解压缩并且进入bin文件夹

# 配置
注意把51XGUCSWRJmzyJK4rU3GRg用生成的uuid替换掉
默认的配置文件在config/kraft里，需要的话请修改
```
./kafka-storage.sh random-uuid
./kafka-storage.sh format -t 51XGUCSWRJmzyJK4rU3GRg -c ../config/kraft/server.properties
```

# 启动服务
```
./kafka-server-start.sh ../config/kraft/server.properties
```

# 测试连接
不报错就成功了
```
./kafka-topics.sh --list --bootstrap-server=localhost:9092 
```