import initialPratice from './initialState'
import initialChessBoard from '../chessBoard/initialState'

const reducers = {
    setView: (state, { payload }) => {
        state.practice.view = payload
        const { previousStates, chessMoves } = state.chessBoard
        state.chessBoard = { previousStates, chessMoves, ...previousStates[state.practice.view] }
    },
    resetPracticeChessBoard: (state) => {
        state.practice = initialPratice
        state.chessBoard = initialChessBoard
    }
}

export default reducers
