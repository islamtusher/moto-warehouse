
import './CustomLink.css'
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
    return (
      <div className='custom'>
        <Link
          className={ `link ${match? 'activeLink' : ""}`}
          to={to}
        >
          {children}
        </Link>
      </div>
    );
}
  
export default CustomLink;
