import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Navbar.scss";
import logo from "../../assets/img/logo/logo.png";
import avatar from "../../assets/img/avatar/avatar.jpg";
import Input from "../Input/Input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Popup from "reactjs-popup";
import { address } from "../../assets/json/userAddress";
import MenuCard from "../MenuCard/MenuCard";
import { useState } from "react";

export default function Navbar() {
  const [location, setlocation] =useState<string>('');

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
        <Popup
          trigger={
            <h3
              style={{ cursor: "pointer", fontSize: '20px'}}
              onClick={() => console.log("cicked location")}
            >
              <FontAwesomeIcon icon={faMapMarkerAlt} />
            {' '} {location || "Location"}
            </h3>
          }
          modal
        >
          <div className='location-modal'>
            <div className='location-modal-header'>
              <h4>Select your delivery location...</h4>
            </div>
            <div className='location-modal-body'>
              {address.map((address) => {
                return (
                  <div className='location-modal-body-item' onClick={()=>setlocation(address.address)}>
                    <div className='location-modal-body-item-icon'>
                      <FontAwesomeIcon
                        icon={faMapMarkerAlt}
                        style={{ fontSize: "25px", color: "#8d76ff" }}
                      />
                    </div>
                    <div className='location-modal-body-item-content' style={{cursor: 'pointer'}} onClick={()=> console.log(address)}>
                      <div
                        className='location-modal-body-item-text'
                        style={{ fontSize: "12px" }}
                      >
                        {address.alias}
                      </div>
                      <div className='location-modal-body-item-text'>
                        {address.address}
                      </div>
                      <div
                        className='location-modal-body-item-break'
                        style={{ fontSize: "10px", color: "#acacac" }}
                      >
                        ────────────────────────
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Popup>

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
