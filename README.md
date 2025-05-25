# RTSP转FLV视频流 RTSP-2-FLV-STREAM

RTSP to FLV video streaming

## 介绍 Introduction

- 使用fluent-ffmpeg处理rtsp视频流为flv视频流。Use fluent-ffmpeg to process rtsp video stream to flv video stream.
- 使用express作为web服务器。Use express as web server.
- 使用websocket-stream监听websocket连接。Use websocket-stream to listen websocket connection.

- **推荐使用 [flv.js](https://github.com/bilibili/flv.js) 作为对应的前端播放器。Recommended to use [flv.js](https://github.com/bilibili/flv.js) as the corresponding frontend player.**
  - [Vue Component Demo](playground/vue/src/components/FLVPlayer.vue)

## 使用说明 Usage

### 使用准备 Usage Prepare

1. 准备运行环境：[Node](https://nodejs.org) >= 16。prepare environment: [Node](https://nodejs.org) >=16.
   [Download](https://nodejs.org/en/download/).

2. 使用你喜欢的包管理器（npm, yarn, pnpm）安装依赖。Use package manager(npm, yarn or pnpm) which you prefer to install dependencies.

- ```shell
  npm install
  ```
  _or use yarn, pnpm_

### 开发使用 Development Usage

- ```shell
  npm run start
  ```
  _or use yarn, pnpm_

### 生产使用 Production Usage

#### 方式一：直接启动 Method 1: Directly Start

- ```shell
  node dist/app.js
  ```
  你可能需要无头启动，并自行监控运行情况。You may need to run without a head, and monitor the running status yourself.

#### 方式二：PM2启动 Method 1: PM2 Start

1. 全局安装[PM2](https://pm2.io/)

- ```shell
  npm install -g pm2
  ```
  _or use yarn, pnpm_

2. 使用PM2启动

- ```shell
  npm run pm2
  ```

  _or use yarn, pnpm_

  PM2将会根据ecosystem.config.cjs中的配置启动应用。PM2 will start the application according to the configuration in ecosystem.config.cjs
