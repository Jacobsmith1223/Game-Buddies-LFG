
const getPost =  (req,res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.get_post([id]).then((posts) => {
    res.status(200).send(posts)})
}
const newPost = async (req,res) => {
    const {id} = req.params
    const {title, content} = req.body
    const db = req.app.get('db')
   const newPost = await db.new_post([title, content, id])
   res.status.send(newPost)
}

const deletePost = async (req,res) => {
    const {id} = req.params
    const db = req.app.get('db')
    db.delete_post([id]).then(() => {
        res.status(200).send('post has gone bye bye')
    })

}




module.exports = {
getPost,
newPost,
deletePost
}