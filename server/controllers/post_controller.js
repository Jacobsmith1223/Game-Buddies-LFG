
const getPost = async (req,res) => {
    const db = req.app.get('db')
    db.get_post().then((posts) => {
        res.status(200).send(posts)
    })
}





module.exports = {
getPost,
}