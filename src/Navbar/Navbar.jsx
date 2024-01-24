import Button from "../assets/Button/Button"
import "./Navbar.css"
const Navbar = ({links}) => {
    return (
        <div className="nav-container">
            <div className="navbar">
                {
                    links.map(link =>
                        <Button {...link} />
                        )
                }
            </div>
        </div>
    )
}

export default Navbar