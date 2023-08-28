import { useSelector } from 'react-redux'
import findPiece from '../../../utils/Find Piece'
import Piece from './piece'

export default function Pieces() {
    const { gameField } = useSelector((store) => store.chess.chessBoard)

    const blackPieces1 = ['bR1', 'bN1', 'bB1', 'bQ', 'bK', 'bB2', 'bN2', 'bR2']
    const blackPieces2 = ['bP1', 'bP2', 'bP3', 'bP4', 'bP5', 'bP6', 'bP7', 'bP8']

    const whitePieces1 = ['wP1', 'wP2', 'wP3', 'wP4', 'wP5', 'wP6', 'wP7', 'wP8']
    const whitePieces2 = ['wR1', 'wN1', 'wB1', 'wQ', 'wK', 'wB2', 'wN2', 'wR2']

    const uniquePieces = [...blackPieces1, ...blackPieces2, ...whitePieces1, ...whitePieces2]

    const pieces = uniquePieces.map((name) => findPiece(name, gameField)).filter(([x, y]) => x > -1 && y > -1)

    return pieces.map(([x, y, name]) => <Piece x={x} y={y} key={name} />)
}
