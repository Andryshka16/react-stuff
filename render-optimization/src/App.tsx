import { useState } from 'react'
import { Virtualization } from './components'

const items = Array.from({ length: 10_000 }, (_, index) => String(index))

const App = () => {
    const [listItems, setListItems] = useState(items)

    const reverseList = () => setListItems((items) => items.slice().reverse())

    return (
        <div className='flex min-h-screen flex-col items-center justify-center bg-zinc-800'>
            <Virtualization list={listItems} itemHeight={30} containerHeight={600} offset={3} />
            <button
                onClick={reverseList}
                className='height mt-4 rounded bg-green-600 px-4 py-1 font-semibold text-white transition duration-200 hover:scale-105'
            >
                Reverse
            </button>
        </div>
    )
}

export default App
