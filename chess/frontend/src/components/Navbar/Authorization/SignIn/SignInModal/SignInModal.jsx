import { useState } from 'react'
import RegistrationForm from './RegistrationForm/RegistrationForm'
import LoginForm from './LoginForm/LoginForm'
import './SignInModal.css'

export default function SignInModal() {
    const [choice, setChoice] = useState('login')

    const switchChoice = () =>
        setChoice((choice) => (choice === 'login' ? 'registration' : 'login'))

    const sliderStyles = { translate: choice === 'login' ? '-50%' : '50%' }
    const signUpStyles = { left: choice === 'login' ? '0' : '-500px' }

    return (
        <div className='signIn' onClick={(e) => e.stopPropagation()}>
            <div className='signIn-choices' onClick={switchChoice}>
                <div className='chosen' style={sliderStyles}></div>
                <h2>Log In</h2>
                <h2>Register</h2>
            </div>

            <div className='login_register' style={signUpStyles}>
                <LoginForm />
                <RegistrationForm />
            </div>
        </div>
    )
}
