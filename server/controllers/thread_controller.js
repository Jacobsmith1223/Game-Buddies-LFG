const getThread =  (req,res) => {
    const db = req.app.get('db')
    db.get_thread().then((threads) => {
    res.status(200).send(threads)})
}
const newThreads = (req,res) => {
    const {game,image} = req.body
    const db = req.app.get('db')
    db.new_thread([game,image]).then(() => {
        res.status(200).send("New thread created")
    })
    
}



module.exports ={
    getThread,
    newThreads
}