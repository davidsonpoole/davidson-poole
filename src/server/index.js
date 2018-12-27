const Express = require('express')
const os = require('os')
const path = require('path')

const app = Express();
app.get('/react', (req, res) => res.send('react.png'))
app.use(Express.static(path.join(__dirname, '../../public')))

app.listen(8000, () => console.log('Listening on port 8000!'))
