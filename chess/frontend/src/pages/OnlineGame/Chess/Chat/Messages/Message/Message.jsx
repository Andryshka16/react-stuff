import { useSelector } from 'react-redux'
import './Message.css'

const Message = ({ type, text, author }) => {
    const { user } = useSelector((store) => store.auth)

    const classname =
        type === 'message' ? `message ${author._id === user._id ? 'native' : 'foreign'}` : `message-alert`

    return (
        <div className={classname}>
            <p className='message-content'>{text}</p>
        </div>
    )
}
export default Message
