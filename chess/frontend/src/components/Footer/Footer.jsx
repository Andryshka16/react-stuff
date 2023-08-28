import Online from './OnlinePlayers/OnlinePlayers'
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <a className='hoverUnderline github-link' href='https://github.com/Andryshka16' target='_blank'>
                © Andryshka
            </a>
            <Online />
        </footer>
    )
}

export default Footer
