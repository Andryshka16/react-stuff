import axios from 'axios'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { showAlert } from '../../../../../../redux/Alert/alertSlice'
import { authorize } from '../../../../../../redux/Authorization/authSlice'
import { resetChess } from '../../../../../../redux/Chess/chessSlice'
import './LoginForm.css'

const inputs = [
    { id: 'username', label: 'Username:' },
    { id: 'password', label: 'Password:' }
]

const server = process.env.REACT_APP_SERVER_URL

export default function LoginForm() {
    const dispatch = useDispatch()
    const { register, handleSubmit, reset } = useForm()

    async function login(data) {
        const response = await axios.post(server + '/users/login', data)
        if (response.data) {
            dispatch(resetChess())
            dispatch(authorize(response.data))
        } else dispatch(showAlert({ text: 'Wrong password' }))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(login)} className='login-form'>
            {inputs.map(({ id, label }) => (
                <div className='signIn-form' key={id}>
                    <label htmlFor={id}>{label}</label>
                    <input type={id === 'password' ? id : 'text'} {...register(id, { required: true })} />
                </div>
            ))}
            <input type='submit' className='hoverScale login-btn' value='Login' />
        </form>
    )
}
