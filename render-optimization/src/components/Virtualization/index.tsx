import { useMemo, useState, useRef, useEffect } from 'react'

interface Props {
    list: string[]
    itemHeight: number
    containerHeight: number
    offset: number
}

const Virtualization = ({ list, itemHeight, containerHeight, offset }: Props) => {
    const [scrollTop, setScrollTop] = useState(0)

    const ref = useRef<HTMLDivElement | null>(null)

    const [startIndex, endIndex] = useMemo(() => {
        let startIndex = Math.floor(scrollTop / itemHeight)
        let endIndex = Math.ceil((scrollTop + containerHeight) / itemHeight)

        startIndex = Math.max(0, startIndex - offset)
        endIndex = Math.min(list.length - 1, endIndex + offset)

        return [startIndex, endIndex]
    }, [scrollTop])

    const items = useMemo(() => {
        const items = []
        for (let i = startIndex; i <= endIndex; i++) {
            items.push({ item: list[i], index: i })
        }
        return items
    }, [list, startIndex, endIndex])

    useEffect(() => {
        const scrollElement = ref.current
        if (scrollElement) {
            const handleScroll = () => setScrollTop(scrollElement.scrollTop)
            scrollElement.addEventListener('scroll', handleScroll)
            return () => scrollElement.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div
            className='w-[600px] overflow-auto rounded-lg bg-zinc-600'
            style={{ height: `${containerHeight}px` }}
            ref={ref}
        >
            <div className='relative' style={{ height: `${list.length * itemHeight}px` }}>
                {items.map(({ item, index }) => (
                    <h3
                        className='absolute px-4 font-semibold text-white'
                        style={{ height: `${itemHeight}px`, top: `${index * itemHeight}px` }}
                        key={index}
                    >
                        Item {item}
                    </h3>
                ))}
            </div>
        </div>
    )
}

export default Virtualization
