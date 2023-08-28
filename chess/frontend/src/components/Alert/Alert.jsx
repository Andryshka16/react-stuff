import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import { hideAlert } from '../../redux/Alert/alertSlice'
import './Alert.css'

const colors = {
    green: 'rgb(0, 180, 0)',
    red: 'rgb(255, 21, 0)'
}

const Alert = () => {
    const dispatch = useDispatch()
    const { show, text, color, time } = useSelector((store) => store.alert)

    useEffect(() => {
        const timeout = setTimeout(() => dispatch(hideAlert()), 1500)
        return () => clearTimeout(timeout)
    }, [time])

    const styles = {
        backgroundColor: colors[color]
    }

    return (
        <CSSTransition in={show} timeout={400} classNames='alert-div' unmountOnExit>
            <div className='alert' style={styles}>
                <h2>{text}</h2>
            </div>
        </CSSTransition>
    )
}

export default Alert
