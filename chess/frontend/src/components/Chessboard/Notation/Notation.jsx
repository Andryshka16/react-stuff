import { useSelector } from 'react-redux'
import './Notation.css'

export default function Notation() {
    const { color } = useSelector((store) => store.chess.currentRoom)
    const { online } = useSelector((store) => store.chess.chessBoard)

    const digits = !online || color === 'w' ? [8, 7, 6, 5, 4, 3, 2, 1] : [1, 2, 3, 4, 5, 6, 7, 8]
    const letters = !online || color === 'w' ? 'a b c d e f g h' : 'h g f e d c b a'

    const digitStyles = {
        rotate: (!online || color === 'w' ? 0 : 180) + 'deg',
        [!online || color === 'w' ? 'bottom' : 'top']: '0',
        [!online || color === 'w' ? 'right' : 'left']: '4px'
    }
    const letterStyles = {
        rotate: (!online || color === 'w' ? 0 : 180) + 'deg',
        [!online || color === 'w' ? 'bottom' : 'top']: '-1px',
        [!online || color === 'w' ? 'left' : 'right']: '5px'
    }

    return (
        <>
            <div className='digits' style={digitStyles}>
                {digits.map((i) => (
                    <p className='notation' key={i}>
                        {i}
                    </p>
                ))}
            </div>

            <div className='letters' style={letterStyles}>
                <p className='notation'>{letters}</p>
            </div>
        </>
    )
}
