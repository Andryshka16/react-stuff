import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setView } from '../../../../redux/Chess/chessSlice'
import './ChessMoves.css'

const ChessMoves = () => {
    const dispatch = useDispatch()
    const { chessMoves } = useSelector((store) => store.chess.chessBoard)
    const { view } = useSelector((store) => store.chess.practice)
    const ref = useRef()

    useEffect(() => {
        ref.current.scrollTop = ref.current.scrollHeight
    }, [chessMoves])

    return (
        <div className='chessMoves scrollable' ref={ref}>
            {chessMoves.map(({ fen, move, turn }, idx) => (
                <div className='move' key={'m' + idx}>
                    {idx % 2 !== 1 && (
                        <div className='index' key={idx + 'inx'}>
                            {idx / 2 + 1}.
                        </div>
                    )}
                    <div
                        className={`move-name ${turn}-move ${view - 1 === idx ? 'selected' : ''}`}
                        onClick={() => dispatch(setView(idx + 1))}
                    >
                        {move}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ChessMoves
