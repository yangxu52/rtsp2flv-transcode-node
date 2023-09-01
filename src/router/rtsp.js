import { rtsp2flvService } from '../service/rtsp2flv.js'

/**
 * Calls the rtsp2flvService function with the provided WebSocket and request objects.
 *
 * @param {WebSocket} ws - The WebSocket object used for communication.
 * @param {Object} req - The request object containing information about the request.
 */
export const rtspRoute = (ws, req) => {
  rtsp2flvService(ws, req)
}
