# CinderworksDocs

本项目使用 [Docusaurus](https://docusaurus.io/) 构建

> WIP

## Todo list (draft)

- [ ] 普通玩家常用的命令
    - 例如FTB Essentials等
- [ ] Operator 常用的命令
    - 例如 Luckperms、领地等
- [ ] 整合包二次开发注意事项
    - 怎么使用 Github Workflows
    - 自带的 build.sh 怎么使用
    - 特别是服务端
    - packwiz 包管理器使用指南
    - resource pack 开发指南
    - 注意某些模组不能贸然升级（比如 Luckperms、~~还有个修改地形的mod叫啥来着~~）
- [ ] 服务器搭建指南
    - 怎么让 packwiz 根据 Git 仓库更新（推荐将 Cinderworks 官方仓库fork到自己仓库来进行维护）
    - 更新注意事项
    - 使用反向代理服务器（如 Velocity。如果用户用不着反向代理，那么应该去除服务器包）
    - 使用 MCDR
    - 使用 Docker
    - MCDR + Docker
- [ ] Q&A
    - 服务器常见问题
    - mod 常见问题
    - packwiz 常见问题

欢迎各位通过 issue 来~~提鬼点子~~，或者直接 PR 来贡献内容

## Installation

```bash
npm install
```

**Note**: feel free to use the package manager of your choice.

## Local Development

```bash
npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

## Build

```bash
npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

## Deployment

Using SSH:

```bash
USE_SSH=true npm run deploy
```

Not using SSH:

```bash
GIT_USER=<Your GitHub username> npm run deploy
```

If you are using GitHub Pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
