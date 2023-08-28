import { useSelector } from 'react-redux'

const HiglightedMoves = () => {
    const { selected, lastMoves } = useSelector((store) => store.chess.chessBoard)

    const highLighted = selected ? [...lastMoves, Object.values(selected)] : lastMoves

    const styles = (x, y) => ({
        top: `${y * 80}px`,
        left: `${x * 80}px`
    })

    return highLighted.map(([x, y], index) => (
        <div style={styles(x, y)} className='highlighted' key={`${x}${y}${index}`}></div>
    ))
}

export default HiglightedMoves
