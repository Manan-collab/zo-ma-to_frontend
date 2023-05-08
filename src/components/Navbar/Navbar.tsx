import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/img/logo/logo.png";
import avatar from "../../assets/img/avatar/avatar.jpg";
import Input from "../Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export default function Navbar() {
  const icon: IconProp = faMapMarkerAlt;

  <FontAwesomeIcon icon={icon} style={{ color: "#ffffff" }} />;

  return (
    <nav className='nav'>
      <div className='nav-lf'>
        <img
          className='logo'
          src={logo}
          alt='login image'
          height='60px'
          width='60px'
        />
        <Input customInput='search' placeholder='Search...' />
      </div>
      <ul>
        <h4>
          {" "}
          <FontAwesomeIcon icon={faMapMarkerAlt} /> Location
        </h4>
        <CustomLink to='/pricing'>Pricing</CustomLink>
        <CustomLink to='/about'>About</CustomLink>
        <CustomLink to='/home'>
          <img
            className='avatar'
            src={avatar}
            alt='avatar'
            height='50px'
            width='50px'
          />
        </CustomLink>
      </ul>
    </nav>
  );
}

interface CustomLinkProps {
  to: string;
  children: React.ReactNode;
}

function CustomLink({ to, children, ...props }: CustomLinkProps) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
