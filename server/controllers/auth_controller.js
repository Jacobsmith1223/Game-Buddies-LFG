const bcrypt = require('bcryptjs')


const register = async (req,res) => {
    const {username,password, profile_pic} = req.body
    const db = req.app.get('db')
    const foundUser = await db.find_user([username])
    if(foundUser[0]){
        return res.status(409).send('Username is already Taken')
    }
    const passwordSalt = bcrypt.genSaltSync(15)
    const passwordHash = bcrypt.hashSync(password,passwordSalt)

    const newUser = await db.register_user([username,passwordHash,profile_pic])

    delete newUser[0].password

    req.session.user = newUser[0]

    res.status(200).send(newUser[0])

}
const login = async (req,res) => {
    const {username,password} = req.body
    const db = req.app.get('db')
    const foundUser = await db.find_user([username])
    if(!foundUser[0]){
        return res.status(403).send('invalid credentials please try again')
    }
    const authPassword = bcrypt.compareSync(password, foundUser[0].password)

    if(authPassword){
        delete foundUser[0].password
        req.session.user = foundUser[0]
        res.status(200).send(foundUser[0])
    }
    else{res.status(403).send('invalid password')}
}

module.exports = {
    register,
    login,
}