import avatars from '../../../assets/avatars'
import './PlayerInfo.css'

const PlayerInfo = ({ user: { username, avatarId } }) => (
    <div className='profile-info'>
        <div className='mini-profile'>
            <img src={avatars[avatarId]} alt='' />
            <h2>{username}</h2>
        </div>
        <h3>1000 elo</h3>
    </div>
)

export default PlayerInfo
