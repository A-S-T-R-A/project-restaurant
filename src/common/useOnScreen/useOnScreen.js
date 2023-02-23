import { useState, useEffect } from "react"

export function useOnScreen(options, triggerOnce = true) {
    const [ref, setRef] = useState(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
            if (triggerOnce) {
                observer.unobserve(ref)
            }
        }, options)

        if (ref) {
            observer.observe(ref)
        }

        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [ref, options, triggerOnce])

    return { setRef, visible }
}
