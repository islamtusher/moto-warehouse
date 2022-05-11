
import './CustomLink.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { Nav } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

function CustomLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    console.log(match);
    return (
      <div className='custom'>
        <Link
          className={ `link ${match ? 'activeLink' : ""}`}
          to={to}
        >
          {children}
        </Link>
      </div>
    );
}
  
export default CustomLink;
