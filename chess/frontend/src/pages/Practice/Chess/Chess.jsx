import ChessMoves from './ChessMoves/ChessMoves'
import ChessBoard from '../../../components/Chessboard/ChessBoard'

const Chess = () => (
    <div style={{ display: 'flex' }}>
        <ChessBoard />
        <ChessMoves />
    </div>
)

export default Chess
