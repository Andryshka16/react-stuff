import { useState } from 'react'
import { useSelector } from 'react-redux'
import flag from '../../../../../../../assets/icons/flag-icon.png'
import cancel from '../../../../../../../assets/icons/cancel-icon.png'
import socket from '../../../../../../../socket/socket'
import './Flag.css'

const Flag = () => {
    const [resign, setResign] = useState(false)
    const { id, color } = useSelector((store) => store.chess.currentRoom)
    function handleCLick() {
        if (!resign) {
            setResign('pressed')
            setTimeout(() => setResign(null), 5000)
        } else {
            setResign(null)
            socket.emit('give_up', { id, color })
        }
    }

    return (
        <div>
            <img
                src={cancel}
                alt=''
                className={`cancel ${resign !== 'pressed' ? 'c-hidden' : ''}`}
                onClick={() => setResign(null)}
            />
            <div className='flag' style={{ backgroundColor: resign ? '#ff9d00' : 'transparent' }}>
                <img className='white' src={flag} alt='' onClick={handleCLick} />
            </div>
        </div>
    )
}

export default Flag
