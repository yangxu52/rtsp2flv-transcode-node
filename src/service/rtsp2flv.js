import { path } from '@ffmpeg-installer/ffmpeg'
import ffmpeg from 'fluent-ffmpeg'
import webSocketStream from 'websocket-stream'

ffmpeg.setFfmpegPath(path)

export function rtsp2flvService(ws, req) {
  const stream = webSocketStream(ws, { binary: true, browserBufferTimeout: 1000000 }, { browserBufferTimeout: 1000000 })
  const url = Buffer.from(req.query.url, 'base64').toString()
  ffmpegHandler(url, stream)
}

function ffmpegHandler(url, stream) {
  const ffmpegCommand = ffmpeg(url)
  configureFFmpegParameter(ffmpegCommand)
  configureFFmpegEvent(ffmpegCommand)
  startFFmpeg(ffmpegCommand, stream)
}

function configureFFmpegParameter(command) {
  command
    .addInputOption('-rtsp_transport', 'tcp', '-buffer_size', '102400')
    .addOutputOption('-threads', '4', '-tune', 'zerolatency', '-preset', 'ultrafast')
    .outputFormat('flv')
    .videoCodec('libx264')
    .noAudio()
}
function configureFFmpegEvent(command) {
  command
    .on('start', (commandLine) => {
      console.log(commandLine)
    })
    .on('codecData', (data) => {
      console.log('Details:', `Format: [${data.format}] `, `Video: [${data.video_details}] `, `Audio: [${data.audio}]`)
    })
    .on('error', (err) => {
      console.log(err.message)
    })
    .on('end', () => {
      console.log('Input stream End!')
    })
}
function startFFmpeg(ffmpegCommand, stream) {
  ffmpegCommand.pipe(stream, { end: true })
}
