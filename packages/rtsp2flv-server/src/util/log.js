import moment from 'moment'

export function logRequest(req) {
  const str = `[Request]: ${req.ip} ${req.hostname} ${moment().format('yyyy/MM/DD HH:mm:ss')} ${req.method} ${req.url} HTTP/${req.httpVersion} ${req.headers['user-agent']} ${req.protocol}`
  console.log(str)
  return str
}
