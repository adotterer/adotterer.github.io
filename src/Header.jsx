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
            <li><a target="_" href="https://mshippoboe.s3.us-west-1.amazonaws.com/ANDREW_DOTTERER_RESUME+(1).pdf">Download CV</a></li>
        </ul>
    </header>
}