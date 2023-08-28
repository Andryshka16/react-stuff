import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { showAlert } from '../../../../../../redux/Alert/alertSlice'
import { authorize } from '../../../../../../redux/Authorization/authSlice'
import { resetChess } from '../../../../../../redux/Chess/chessSlice'
import validation from '../Validation'
import './RegistrationForm.css'

const registrationInputs = [
    { id: 'username', label: 'Username:' },
    { id: 'email', label: 'Email:' },
    { id: 'password', label: 'Password:' }
]

const server = process.env.REACT_APP_SERVER_URL

export default function RegistrationForm() {
    const { register, handleSubmit, formState, reset } = useForm({ mode: 'onChange' })
    const dispatch = useDispatch()
    const { errors, isValid } = formState

    async function registrateUser(data) {
        const newUser = { ...data, avatarId: Math.floor(Math.random() * 16) }
        const response = await axios.post(server + '/users/registration', newUser)

        if (response.data) {
            dispatch(resetChess())
            dispatch(authorize(response.data))
        } else {
            dispatch(showAlert({ text: `Username '${newUser.username}' is taken!` }))
        }
        reset()
    }

    return (
        <form onSubmit={handleSubmit(registrateUser)} className='registration-form'>
            {registrationInputs.map(({ id, label }) => (
                <div className='signIn-form' key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input type='text' {...register(id, validation[id])} />
                    {errors?.[id] && <div className='error'>{errors?.[id].message}</div>}
                </div>
            ))}

            <input
                type='submit'
                className='hoverScale registration-btn'
                value='Register'
                disabled={!isValid}
            />
        </form>
    )
}
