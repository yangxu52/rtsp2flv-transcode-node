import express from 'express'
import expressWebSocket from 'express-ws'
import config from './config.js'
import { rtspRoute } from './router/rtsp.js'

// 创建服务器
const app = express()
expressWebSocket(app, null, { perMessageDeflate: true })

// WebSocket 路由
app.ws('/rtsp/', rtspRoute)

// 获取端口号
const { port } = config[process.env.NODE_ENV]

// 启动服务器
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
