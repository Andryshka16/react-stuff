import { useForm } from 'react-hook-form'
import useHandlePlayButton from '../../../../hooks/useJoinRoom'
import './JoinRoom.css'

const JoinModal = ({ room, closeModal }) => {
    const { register, handleSubmit, reset } = useForm()
    const handlePlayButton = useHandlePlayButton(room, reset)

    return (
        <div className='global-shadow' onClick={closeModal}>
            <form
                onSubmit={handleSubmit(handlePlayButton)}
                className='joinModal'
                onClick={(e) => e.stopPropagation()}
            >
                <label htmlFor='password'>Enter the password: </label>
                <input type='password' {...register('password')} placeholder='Password' />
                <div className='joinModal-buttons'>
                    <input type='submit' className='hoverScale play-btn' value='Play'></input>
                    <button className='hoverScale  cancel-btn' onClick={closeModal}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    )
}

export default JoinModal
