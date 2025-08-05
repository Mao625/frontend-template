前端

使用如下指令安装依赖包即可
# 1. 安装依赖包
pnpm install
# 2. 启动项目
pnpm dev
修改后端项目后可执行如下命令快速生成接口
pnpm openapi
后端

根据/sql目录下的/create_table.sql创建表
修改application.yml文件中的 MySQL数据库连接、Redis数据库连接
修改/utils/CodeUtils.java中的邮箱配置
完善阿里云oss配置
三.代码仓库
仓库地址：https://gitee.com/fspStudy/quick-develop-template.git （前后端项目放在了同一个父目录中，可以根据需要分别管理）
