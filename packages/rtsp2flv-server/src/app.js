import fs from 'node:fs'
import path from 'node:path'
import https from 'node:https'
import express from 'express'
import expressWs from 'express-ws'
import {logRequest} from './util/log.js'
import config from './config.js'
import {rtsp2flvService} from './service/rtsp2flv.js'

const __dirname = path.resolve()

const options = {
    key: fs.readFileSync(path.join(__dirname, 'src/cert', 'private.key')),
    cert: fs.readFileSync(path.join(__dirname, 'src/cert', 'public.pem')),
}
// 创建服务器
const app = express()
const server = https.createServer(options, app)
expressWs(app, server, {perMessageDeflate: false})
// test function
app.get('/test', (req, res) => {
    res.send(logRequest(req))
})
app.ws('/rtsp/', rtsp2flvService)

// 获取端口号
const {port} = config[process.env.NODE_ENV]

// 启动服务器
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
