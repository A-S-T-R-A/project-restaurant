import React, { Suspense, useEffect, useState } from "react"

import {
    AboutUs,
    Chef,
    FindUs,
    Footer,
    Gallery,
    Header,
    Intro,
    Laurels,
    SpecialMenu,
} from "./container"
import { Navbar } from "./components"
import "./index.css"
import "./App.css"

function App() {
    const [shouldLoadSecondChunk, setShouldLoadSecondChunk] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setShouldLoadSecondChunk(true)
        }, 500)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div>
            <Suspense fallback={<></>}>
                <Navbar />
                <Header />
            </Suspense>
            {shouldLoadSecondChunk && (
                <Suspense fallback={<></>}>
                    <AboutUs />
                    <SpecialMenu />
                    <Chef />
                    <Intro />
                    <Laurels />
                    <Gallery />
                    <FindUs />
                    <Footer />
                </Suspense>
            )}
        </div>
    )
}

export default App
