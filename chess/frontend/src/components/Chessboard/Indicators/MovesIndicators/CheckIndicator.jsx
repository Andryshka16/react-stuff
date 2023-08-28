import { useSelector } from 'react-redux'

const CheckIndicator = () => {
    const { checkStatus } = useSelector((store) => store.chess.chessBoard)
    const styles = ([x, y]) => ({
        left: `${x * 80}px`,
        top: `${y * 80}px`
    })
    return checkStatus?.king && <div style={styles(checkStatus.king)} className={'check'}></div>
}

export default CheckIndicator
