import { model, Schema } from 'mongoose'

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
        avatarId: { type: Number, required: true }
    },
    { timestamps: true }
)

const User = model('USERS', userSchema)

export default User
