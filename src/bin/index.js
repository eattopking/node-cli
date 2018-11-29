#!/usr/bin/env node

const chalk = require("chalk");
const ora = require("ora");
const logSymbols = require("log-symbols");
const download = require("download-git-repo");
const program = require("commander");
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
