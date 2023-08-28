import { useSelector } from 'react-redux'

const Online = () => {
    const { onlineUsers } = useSelector((store) => store)
    return (
        <h2 className='online-players' style={{ margin: '0 60px' }}>
            {onlineUsers} online
        </h2>
    )
}

export default Online
