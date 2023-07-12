import React from "react"

type HomePageProps = {
    children?: React.ReactNode
}

export const HomePage: React.FC<HomePageProps> = () => {
    return (
        <div>
            <h1>HomePage</h1>
        </div>
    )
}