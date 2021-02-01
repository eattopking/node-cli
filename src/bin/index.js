#!/usr/bin/env node
// node 既可以写服务， 也可以写脚本， 所有手动在终点运行和完成的指令， 通过node环境的js代码都可以实现
// process.exit(1); 这就是在代码中以错误状态退出进程

// 设置终端输出的字体颜色的库
const chalk = require("chalk");
// node读写文件的模块， 读写文件的时候， 默认路径为指令执行的目录， 所有调用读写文件的时候， 直接写要操作的目录下的文件名就行辣
const fs = require("fs");
// 设置终端输出的loadding的过程和图标的库
const ora = require("ora");
// 在node终端输出表格的库， 根据文档在终端输出表格
const cliTable = require("cli-table");
// 设置node终端输出的图标的库, 就像这样使用， 设置一个错误的图标， 和一串终端中红色的字
//console.error(symbols.error,
// chalk.red(`${err} download template failed, please check your network connection and try again!`)
// );
const logSymbols = require("log-symbols");
// 下载git上代码的库， download下载git的代码默认下载在指令脚本的目录下
const download = require("download-git-repo");
// 比较好用的模板库，和node和配， fs读到的文件内容， 转换为字符串，handlebars直接就能使用拉
//const packageMeta = {
//   projectName,
//   description,
//   author,
// };
// const fileName = `${projectName}/package.json`;
// const content = fs.readFileSync(fileName).toString();
// const result = handlebars.compile(content)(packageMeta);
const handlebars = require("handlebars");
// node.js命令行指令解析库， 可以分别设置多个指令
const program = require("commander");
// node.js命令行界面交互库, 先给交互设置对应步骤， 最后将交互输入的结果， 一起处理
const inquirer = require("inquirer");
// npm 操作文件和目录的
const { ensureFile, outputFile } = require("fs-extra");

// commander 可以单独设置监听指令， 并且我们就是需要怎么使用他们， 这样可以分模块， 逻辑更清晰
// 每个指令中不是所有的设置项都要设置一遍， 而是根据需要， 每个指令中设置不同的配置项， 也不是每个指令中都需要设置action配置想，
// 不需要设置触发什么动作的的时候就不要设置
program
  .alias("a")
  .command("add")
  .action(cmd => {
    createProject();
  });

  program
  .alias("i")
  .command("init")
  .action(cmd => {
    createProject();
  });

program.parse(process.argv);

function createProject() {
  const options = [
    {
      type: "input",
      name: "name",
      message: "请输入文件名称",
      default: "要创建的文件名称",
      validate: name => {
        if (/^[a-z]+/.test(name)) {
          let path = __dirname + "/test.js";
          ensureFile(path);
          return true;
        } else {
          return "项目名称必须以小写字母开头";
        }
      }
    },
    {
      type: "input",
      name: "content",
      message: "请输入文件内容",
      default: "要创建的文件内容",
      validate: content => {
        if (content.length > 0) {
          let path = __dirname + "/test.js";
          outputFile(path, content);
          return true;
        } else {
          return "作者名称必须长度必须大于0";
        }
      }
    }
  ];

  inquirer.prompt(options).then(resolve => {
    console.log("最后录入的结果", resolve);
  });
}
