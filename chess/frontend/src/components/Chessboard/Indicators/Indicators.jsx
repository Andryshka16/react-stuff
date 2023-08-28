import CheckIndicator from './MovesIndicators/CheckIndicator'
import HiglightedMoves from './MovesIndicators/HiglightedMoves'
import NextMoves from './MovesIndicators/NextMoves'
import './Indicators.css'

const Indicators = () => (
    <>
        <CheckIndicator />
        <HiglightedMoves />
        <NextMoves />
    </>
)

export default Indicators
