import Express from 'express'

exports.onCreateDevServer = ({ Express }) => {
  app.get('/hello', function (req, res) {
    res.send('hello world')
  })
}