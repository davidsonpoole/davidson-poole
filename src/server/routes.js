const path = require('path')
const postController = require('./controllers').posts

module.exports = function routes(app) {
    app.post('/api/post', postController.create)
    app.get('/api/blogs', postController.list)
    app.post('/api/removeAll', postController.removeAll)
    app.post('/api/remove/:postId', postController.remove)
}
