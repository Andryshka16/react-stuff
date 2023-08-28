import { useSelector } from 'react-redux'
import './Status.css'

export default function Status() {
    const { status } = useSelector((store) => store.chess.currentRoom)
    return (
        <div className='status'>
            <div
                className='active'
                style={{ backgroundColor: status === 3 ? 'grey' : 'rgb(1, 189, 1)' }}
            ></div>
            <h2>Online</h2>
        </div>
    )
}
