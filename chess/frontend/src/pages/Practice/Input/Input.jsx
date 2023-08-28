import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { resetPracticeChessBoard, setChess } from '../../../redux/Chess/chessSlice'
import { showAlert } from '../../../redux/Alert/alertSlice'
import fromFEN from '../../../utils/FEN/from FEN/fromFEN'
import reset from '../../../assets/icons/reset-icon.png'
import './Input.css'

const Input = () => {
    const dispatch = useDispatch()
    const { fen } = useSelector((store) => store.chess.chessBoard)
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(fen)
    }, [fen])

    return (
        <form
            className='fen-input-field'
            onSubmit={(e) => {
                e.preventDefault()
                if (value !== fen) {
                    const chessBoard = fromFEN(value)
                    if (chessBoard) dispatch(setChess(chessBoard))
                    else dispatch(showAlert({ text: 'Incorrect FEN input.' }))
                }
            }}
        >
            <label htmlFor='fen'>FEN</label>
            <input type='text' id='fen' value={value} onChange={(e) => setValue(e.target.value)} />
            <img src={reset} alt='' className='reset' onClick={() => dispatch(resetPracticeChessBoard())} />
        </form>
    )
}

export default Input
