import React from "react";

export default function WindowsTracker(){

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)

    React.useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowWidth(window.innerWidth)
        })
        return () => {
            window.removeEventListener("resize", () => {
                setWindowWidth(window.innerWidth)
            })
            }
    }, [])

    return(
        <h1>Window width: {windowWidth} </h1>
    )
}