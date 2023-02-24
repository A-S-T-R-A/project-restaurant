import React, { Suspense } from "react"

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
    const { ready } = useScrollTimeoutLoading(1000)

    return (
        <div>
            <Suspense fallback={<></>}>
                <Navbar />
                <Header />
            </Suspense>
            {ready && (
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
