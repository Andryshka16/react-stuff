import express from 'express'
import User from '../models/Users.js'

const router = express.Router()

router.get('/', async (_, res) => await res.json(await User.find()))

router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body
        const user = await User.findOne({ username, password })
        res.send(user)
    } catch (error) {
        res.send(error)
    }
})

router.post('/registration', async (req, res) => {
    try {
        const { username, email, password, avatarId } = req.body
        if (await User.findOne({ username })) {
            res.send(null)
        } else {
            const NewUser = new User({ username, email, password, avatarId })
            await NewUser.save()
            res.send(NewUser)
        }
    } catch (error) {
        console.log(error)
        res.send(error)
    }
})

router.delete('/:id', async (req, res) => {
    try {
        const deleted = await User.findByIdAndDelete(req.params.id)
        if (deleted) res.send('user deleted')
    } catch (error) {
        res.send(error)
    }
})

export default router
