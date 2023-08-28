import useCreateRoom from '../../../../hooks/useCreateRoom'
import { useForm } from 'react-hook-form'
import './CreateRoom.css'

const inputs = [
    { key: 'name', label: 'Room name:', text: 'Name' },
    { key: 'password', label: 'Room password:', text: 'Password' }
]

const CreateModal = ({ closeModal }) => {
    const { register, handleSubmit, reset } = useForm()
    const createRoom = useCreateRoom()

    const addRoom = (data) => {
        createRoom(data)
        closeModal()
        reset()
    }

    return (
        <div className='global-shadow' onClick={closeModal}>
            <form
                onSubmit={handleSubmit(addRoom)}
                className='createModal'
                onClick={(e) => e.stopPropagation()}
            >
                {inputs.map(({ key, label, text }) => (
                    <div className='input-field' key={key}>
                        <label htmlFor={key}>
                            <h2>{label}</h2>
                        </label>
                        <input type='text' {...register(key)} placeholder={text} />
                    </div>
                ))}
                <input type='submit' className='hoverScale createRoom' value='Create room!'></input>
            </form>
        </div>
    )
}

export default CreateModal
