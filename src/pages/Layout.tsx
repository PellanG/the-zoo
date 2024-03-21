import { Outlet } from "react-router-dom"
import { Navigation } from "../components/Navigation"

export const Layout = () => {
    return<>
    <header>
        <h1> The Zoo</h1>
        <Navigation></Navigation>
    </header>
    <main>
        <Outlet/>
    </main>
    </>
}