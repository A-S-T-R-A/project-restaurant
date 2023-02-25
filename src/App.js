import React, { Suspense, useEffect } from "react"

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
import { useScrollTimeoutLoading } from "./common/useScrollTimeoutLoading/useScrollTimeoutLoading"

function App() {
    const { ready } = useScrollTimeoutLoading(500)
    useEffect(() => {
        setTimeout(() => {
            import("./AsyncApp.css")
        }, 400)
    }, [])

    return (
        <div>
            <Suspense fallback={<></>}>
                <Navbar />
                <Header />
                <AboutUs />
            </Suspense>
            {ready && (
                <Suspense fallback={<></>}>
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
