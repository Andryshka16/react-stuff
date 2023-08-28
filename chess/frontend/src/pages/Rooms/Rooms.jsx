import { useState } from 'react'
import { useSelector } from 'react-redux'
import Room from './Room/Room'
import JoinModal from './Room/JoinRoomModal/JoinRoomModal.jsx'
import CreateModal from './Room/CreateRoomModal/CreateRoomModal'
import './Rooms.css'

const Rooms = () => {
    const { rooms } = useSelector((store) => store)
    const { id } = useSelector((store) => store.chess.currentRoom)

    const [joinModal, setJoinModal] = useState(false)
    const [createModal, setCreateModal] = useState(false)

    return (
        <>
            {joinModal.show && <JoinModal room={joinModal.room} closeModal={() => setJoinModal(false)} />}
            {createModal.show && <CreateModal closeModal={() => setCreateModal(false)} />}

            {rooms.length ? (
                rooms.map((room) => (
                    <Room {...room} setJoinModal={() => setJoinModal({ show: true, room })} key={room.id} />
                ))
            ) : (
                <h1 className='h1-info'>No empty rooms found.</h1>
            )}
            {!id && (
                <button className='hoverScale createRoom' onClick={() => setCreateModal({ show: true })}>
                    Create room
                </button>
            )}
        </>
    )
}

export default Rooms
