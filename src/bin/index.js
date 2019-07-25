#!/usr/bin/env node
// 设置终端输出的字体颜色
const chalk = require("chalk");
// 设置终端输出的loadding的图标和字体
const ora = require("ora");
// 设置终端输出的图标
const logSymbols = require("log-symbols");
// 下载git代码的
const download = require("download-git-repo");
// node.js命令行界面指令设置库
const program = require("commander");
// node.js命令行界面交互库
const inquirer = require("inquirer");

program
  .version("1.0.0", "-v, --version", "version")
  .usage("[options] <file ...>")
  .description("react-cli")
  .alias("xf")
  .option("-s, --show <show>")
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
      message: "请输入项目名称",
      default: "要创建的项目",
      validate: name => {
        if (/^[a-z]+/.test(name)) {
          return true;
        } else {
          return "项目名称必须以小写字母开头";
        }
      }
    },
    {
      type: "input",
      name: "author",
      message: "请输入作者",
      default: "要创建的项目",
      validate: author => {
        if (author.length > 0) {
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
