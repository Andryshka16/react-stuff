import { useDispatch, useSelector } from 'react-redux'
import { movePiece } from '../../../redux/Chess/chessSlice'

export default function useStartDragging([x, y]) {
    const dispatch = useDispatch()
    const { id, color } = useSelector((store) => store.chess.currentRoom)
    const { chessBoard } = useSelector((store) => store.chess)

    return (event, nextMovesArray) => {
        const startingX = event.clientX
        const startingY = event.clientY
        const target = event.target

        target.style.transition = 'none'
        target.style.zIndex = '3'

        const k = chessBoard.online && color === 'b' ? -1 : 1

        const follow = (event) => {
            target.style.left = `${x * 80 + (event.x - startingX) * k}px`
            target.style.top = `${y * 80 + (event.y - startingY) * k}px`
        }
        const unFollow = (event) => {
            let newX = x + Math.round(((event.x - startingX) * k) / 80)
            let newY = y + Math.round(((event.y - startingY) * k) / 80)

            const nextMovesInclude = nextMovesArray.map((i) => i.toString()).includes([newX, newY].toString())

            target.style.transition = '170ms'
            target.style.zIndex = '2'
            target.style.top = `${(nextMovesInclude ? newY : y) * 80}px`
            target.style.left = `${(nextMovesInclude ? newX : x) * 80}px`

            if (nextMovesInclude) dispatch(movePiece({ x2: newX, y2: newY, id }))

            window.removeEventListener('mousemove', follow)
            window.removeEventListener('mouseup', unFollow)
        }

        window.addEventListener('mousemove', follow)
        window.addEventListener('mouseup', unFollow)
    }
}
