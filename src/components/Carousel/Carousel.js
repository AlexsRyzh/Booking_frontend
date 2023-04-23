import React, { useState, useEffect, cloneElement, Children } from 'react'
import styles from './carousel.module.scss'
import useWindowSize from '../../hooks/useWindowSize'

const TRANSITION_DURATION = 500



const Carousel = ({ children, infinite, ...props }) => {

    const { width } = useWindowSize()
    const [pages, setPages] = useState([])
    const [clonesCount, setClonesCount] = useState({ head: 0, tail: 0 })
    const [offset, setOffset] = useState(1)
    const [transitionDuration, setTransitionDuration] = useState(0)
    const [leftMargin, setLeftMargin] = useState(0)
    const lines = new Array(children.length).fill(0)


    useEffect(() => {
        setLeftMargin((width - 1440) / 2)
    }, [width])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setOffset(offset => offset + 1)
    //     }, 5000)
    //     console.log(1)
    //     return () => {
    //         console.log(2)
    //         clearInterval(interval)
    //     }
    // }, [offset])

    useEffect(() => {
        if (infinite) {
            setPages([
                cloneElement(children[Children.count(children) - 1]), // tail: 1
                ...children,
                cloneElement(children[0]), // head: 1
            ])
            setClonesCount({ head: 1, tail: 1 })
            return
        }
        setPages(children)
    }, [children, infinite])

    useEffect(() => {
        if (transitionDuration === 0) {
            setTimeout(() => {
                setTransitionDuration(TRANSITION_DURATION)
            }, TRANSITION_DURATION)
        }
    }, [transitionDuration])

    useEffect(() => {
        if (!infinite) return

        // с элемента 0 (clone) -> к предпоследнему (реальный)
        if (offset === pages.length - 1) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset(1)
            }, TRANSITION_DURATION)
            return
        }
        // с элемента n (clone) -> к элементу 1 (реальный)
        if (offset === 0) {
            setTimeout(() => {
                setTransitionDuration(0)
                setOffset(pages.length - 1)
            }, TRANSITION_DURATION)
            return
        }
    }, [offset, infinite, pages, clonesCount, width])

    return (
        <div className={styles['container']}>
            <div
                className={styles['slider_container']}
                style={{
                    transform: `translateX(-${offset * width}px)`,
                    transitionDuration: `${transitionDuration}ms`,


                }}
            >
                {pages}
            </div>
            <div className={styles['progress']} style={{
                left: `${60 + (leftMargin > 0 ? leftMargin : 0)}px`
            }}>
                {lines.map((value, index) => (
                    <div
                        className={styles['line'] + " " + ((offset === index + 1) ? styles['active'] : "")}
                        onClick={() => {
                            setOffset(index + 1)
                        }}
                        key={index}></div>
                ))}
            </div>
        </div>
    )
}

export default Carousel