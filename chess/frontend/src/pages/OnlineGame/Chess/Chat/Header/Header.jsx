import Actions from './Actions/Actions'
import Status from './Status/Status'
import './Header.css'

export default function ChatHeader() {
    return (
        <div className='header'>
            <Status />
            <Actions />
        </div>
    )
}
