import useHandleCellClick from '../../../hooks/useHandleCellClick'

const color1 = 'rgb(255,195,151)'
const color2 = 'rgb(39,39,39)'

const Cell = ({ x, y }) => {
    const handleCellClick = useHandleCellClick(x, y)
    const styles = { background: (x + y) % 2 ? color2 : color1 }
    return <div className={'cell'} style={styles} onClick={handleCellClick}></div>
}

const Cells = () => Array.from({ length: 64 }, (_, i) => <Cell x={i % 8} y={Math.floor(i / 8)} key={i} />)

export default Cells
