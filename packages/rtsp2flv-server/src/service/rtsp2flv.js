import { path } from '@ffmpeg-installer/ffmpeg'
import ffmpeg from 'fluent-ffmpeg'
import webSocketStream from 'websocket-stream'
import { logRequest } from '../util/log.js'
ffmpeg.setFfmpegPath(path)

export function rtsp2flvService(ws, req) {
  const stream = webSocketStream(ws, { binary: true, browserBufferTimeout: 1000000 })
  const url = Buffer.from(req.query.url, 'base64').toString()
  logRequest(req)
  ffmpeg(url)
    .on('start', (commandLine) => {
      console.log(`[Command]: ${commandLine}`)
    })
    .on('codecData', (data) => {
      console.log(`[Detail]: format:${data.format}, video:{${data.video_details}} audio:{${data.audio}}`)
    })
    .on('error', (err) => {
      console.log(`[Error]: ${err.message}`)
      ws.terminate()
    })
    .on('end', () => {
      console.log('[Terminated]: Input stream End!')
    })
    .addInputOption('-rtsp_transport', 'tcp', '-buffer_size', '102400')
    .addOutputOption('-threads', '4', '-tune', 'zerolatency', '-preset', 'ultrafast')
    .outputFormat('flv')
    .videoCodec('libx264')
    .noAudio()
    .pipe(stream, { end: true })
}
