import { useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import socket from '../../../../../socket/socket'
import Message from './Message/Message'
import './Messages.css'

const validation = {
    validate: (value) => value.trim() && !value.split(' ').filter((i) => i.length >= 20).length
}

const Messages = () => {
    const { register, handleSubmit, reset } = useForm()

    const { id } = useSelector((store) => store.chess.currentRoom)
    const author = useSelector((store) => store.auth.user)
    const roomMessages = useSelector((store) => store.chess.currentRoom.chat)

    const submit = (data) => {
        const message = { ...data, author, type: 'message', id: new Date().getTime() }
        socket.emit('newMessage', { message, id })
        reset()
    }
    return (
        <form className='messages scrollable' onSubmit={handleSubmit(submit)}>
            <input type='text' {...register('text', validation)} placeholder='Enter a message' />
            <TransitionGroup>
                {roomMessages.map((msg) => (
                    <CSSTransition timeout={200} classNames='msg-trn' key={msg.id}>
                        <Message {...msg} />
                    </CSSTransition>
                ))}
            </TransitionGroup>
        </form>
    )
}

export default Messages
