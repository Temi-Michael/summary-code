import { Link } from "react-router-dom";

export default function Nav(props) {
    return (
        <nav className="Nav">
            <ul>
                <li><Link to='/'>{ props.home }</Link></li>
                <li><Link to='about'>{ props.about }</Link></li>
                <li><Link to='contact'>{ props.contact }</Link></li>
            </ul>
        </nav>
    )
};
