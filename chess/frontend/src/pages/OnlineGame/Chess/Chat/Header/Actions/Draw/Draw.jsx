import { useDispatch, useSelector } from 'react-redux'
import { setDrawStatus } from '../../../../../../../redux/Chess/chessSlice'
import socket from '../../../../../../../socket/socket'
import handshake from '../../../../../../../assets/icons/handshake-icon.png'
import './Draw.css'

const Draw = () => {
    const dispatch = useDispatch()
    const { id, drawStatus } = useSelector((store) => store.chess.currentRoom)
    const visibility = drawStatus !== 'received' ? 'hidden' : ''

    function handleClick() {
        if (drawStatus === 'sent') {
            socket.emit('decline_draw', id)
        } else if (drawStatus === 'received') {
            socket.emit('accept_draw', id)
        } else {
            socket.emit('suggest_draw', id)
            dispatch(setDrawStatus('sent'))
        }
    }

    return (
        <div>
            <button className={'decline-draw ' + visibility} onClick={() => socket.emit('decline_draw', id)}>
                Decline
            </button>
            <div
                className='handshake'
                onClick={handleClick}
                style={{ backgroundColor: drawStatus ? '#2a7e00' : 'transparent' }}
            >
                <img src={handshake} className='white' alt='' />
            </div>
        </div>
    )
}

export default Draw
