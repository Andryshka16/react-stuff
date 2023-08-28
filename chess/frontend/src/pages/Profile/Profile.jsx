import { useSelector } from 'react-redux'
import avatars from '../../assets/avatars'
import './Profile.css'

const Profile = () => {
    const { username, avatarId, email, createdAt } = useSelector((store) => store.auth.user)
    const { authorized } = useSelector((store) => store.auth)
    return authorized ? (
        <div className='profile'>
            <img src={avatars[avatarId]} className='avatar' alt='' />
            <div>
                <h2 className='name'>{username}</h2>
                <h3 className='email'>{email}</h3>
                <h4 className='date'>Member since: {new Date(createdAt).toLocaleDateString()}</h4>
            </div>
        </div>
    ) : (
        <h1 className='h1-info'>Sign In to watch your profile stats!</h1>
    )
}

export default Profile
