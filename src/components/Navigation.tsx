import { NavLink } from "react-router-dom"

export const Navigation = () => {
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/animals">Animals</NavLink>
                </li>
            </ul>
        </nav>
    )
}