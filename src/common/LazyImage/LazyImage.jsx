import React, { useEffect, useState } from "react"

export function LazyImage({ src, alt, rootMargin = "250px", ...props }) {
    //const [ref, setRef] = useState(null)
    const [isVisible, setIsVisible] = useState(true)
    /* 
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                    observer.unobserve(ref)
                }
            },
            { rootMargin }
        )

        if (ref) {
            observer.observe(ref)
        }

        return () => {
            if (ref) {
                observer.unobserve(ref)
            }
        }
    }, [ref, rootMargin]) */

    return (
        <img
            /* ref={setRef} */ src={isVisible ? src : ""}
            alt={alt}
            {...props}
        />
    )
}
