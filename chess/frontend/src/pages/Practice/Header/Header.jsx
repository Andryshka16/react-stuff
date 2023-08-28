import target from '../../../assets/icons/target-icon.png'
import './Header.css'

const Header = () => (
    <div className='practice-header'>
        <div style={{ display: 'flex' }}>
            <img src={target} alt='' className='target' />
            <h2>Practice</h2>
        </div>
    </div>
)

export default Header
