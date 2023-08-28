import { useState } from 'react'
import SignInModal from './SignInModal/SignInModal'
import './SignInButton.css'

export default function SignIn() {
    const [showModal, setShowModal] = useState(false)
    const displayModal = () => setShowModal((prev) => !prev)

    return (
        <>
            <button className='hoverScale signIn-btn' onClick={displayModal}>
                Sign In
            </button>
            {showModal && (
                <div className='global-shadow' onClick={displayModal}>
                    <SignInModal />
                </div>
            )}
        </>
    )
}
