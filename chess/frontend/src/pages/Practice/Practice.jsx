import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setChess, setView } from '../../redux/Chess/chessSlice'
import Header from './Header/Header'
import Chess from './Chess/Chess'
import Input from './Input/Input'
import './Practice.css'

const Practice = () => {
    const dispatch = useDispatch()
    const { practice } = useSelector((store) => store.chess)
    const { view, chessBoard } = practice

    const { previousStates } = chessBoard

    useEffect(() => {
        dispatch(setChess(practice.chessBoard))
    }, [])

    const handleArrows = (event) => {
        if (event.key === 'ArrowLeft' && view > 0) dispatch(setView(view - 1))
        if (event.key === 'ArrowRight' && view < previousStates.length - 1) dispatch(setView(view + 1))
    }

    useEffect(() => {
        window.addEventListener('keydown', handleArrows)
        return () => window.removeEventListener('keydown', handleArrows)
    }, [view, previousStates])

    return (
        <div className='practice'>
            <Header />
            <Chess />
            <Input />
        </div>
    )
}

export default Practice
