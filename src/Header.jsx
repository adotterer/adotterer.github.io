import { Link } from "react-router-dom";

export default function Header() {
    return <header>
        <div className="name_title">
            <h1>Andrew Dotterer</h1>
            <div>
                <h2>Software Engineer, Oboist</h2>
            </div>
        </div>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/music">Music</Link></li>
            <li><Link to="/contact">Contact</Link></li>
        </ul>
    </header>
}