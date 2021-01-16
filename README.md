# 项目说明

#### 最基础入门cli, package里面的bin表示，
#### 如果有人在npm上全局安装了我们的包，就在全局下拥有了bin下的选项当作指令，
#### 比如安装了webpack-cli，就可以在命令行用webpack指令 一样

#### 这就是个最基础的cli创建方式, 入门练习, 理解cli
```
更新 npm包的版本

例如1.0.0  就是 major.minor.patch   主要版本.次要版本.布丁版本

npm version major  更新主要版本  例如从1.0.0 更新到2.0.0
npm version minor  更新次要版本  例如从1.0.0 更新到1.1.0
npm version patch  更新不定版本版本  例如从1.0.0 更新到1.0.1

调用指令更新版本， 会直接将触发的package.json中的变化commit掉， 我们只需要 进行git push  操作提交就行了

我们不进行git commit 也是可以  npm publish 发布版本的


注意点：
1. 设置npm包私有作用域命名@后面的名字是随便取的， 不要看网上的文章瞎说必须是username， 那是不对的, 是什么都可以

2. 使用lerna 发布包， 不用手动修改版本号， 需要将修改的内容提交git后， 然后在lerna publish ， lerna 会直接 将修改版本号， 然后将内容 add commit push 到git， 并且会将包npm publish 发布到 npm仓库

3. lerna 就是包管理工具
```