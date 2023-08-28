import { useSelector } from 'react-redux'

const color1 = 'rgb(255,195,151)'
const color2 = 'rgb(39,39,39)'

const styles = (x, y) => ({
    top: `${y * 80}px`,
    left: `${x * 80}px`
})

const NextMoves = () => {
    const { gameField, nextMoves } = useSelector((store) => store.chess.chessBoard)

    return nextMoves.map(([x, y]) =>
        gameField[y][x] === '0' ? (
            <div className='dot' style={styles(x, y)} key={'dot' + x + y}></div>
        ) : (
            <div key={'target' + x + y}>
                <div className='rectangle' style={styles(x, y)}></div>
                <div
                    className='circle'
                    style={{ ...styles(x, y), background: (x + y) % 2 ? color2 : color1 }}
                ></div>
            </div>
        )
    )
}

export default NextMoves
