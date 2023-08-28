import Header from './Header/Header'
import Messages from './Messages/Messages'
import Timer from './Timer/Timer'
import './Chat.css'

const Chat = () => (
    <div className='chat'>
        <Timer />
        <Header />
        <Messages />
    </div>
)

export default Chat
