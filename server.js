const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')

// Production entry point (Passenger runs this as the Node app on cPanel).
// Always production here — `next dev` is only used locally via `npm run dev`.
const port = process.env.PORT || 3000
const app = next({ dev: false })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    // Force HTTPS. Passenger/LiteSpeed sets x-forwarded-proto; .htaccess
    // rewrites don't run for Passenger apps, so we redirect in the app.
    // Only redirect on an explicit http signal to avoid any redirect loop.
    if (req.headers['x-forwarded-proto'] === 'http') {
      res.writeHead(301, { Location: `https://${req.headers.host}${req.url}` })
      res.end()
      return
    }
    handle(req, res, parse(req.url, true))
  }).listen(port, () => {
    console.log(`> Ready on http://localhost:${port}`)
  })
})
