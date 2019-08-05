import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Navbar, NavbarBrand, Nav, NavItem} from 'reactstrap';
import './index.scss';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  const handleClick = () => setToggle(!toggle);
  return (
    <>
      <Navbar color="dark" dark expand="md" className = 'nav__wrap'>
        <NavbarBrand>
          {toggle ? (
            <Link className="link" to="/" onClick = {handleClick}>
              Main
            </Link>
          ) : (
            <Link className="link" to="/Info" onClick = {handleClick}>
              Info
            </Link>
          )}
        </NavbarBrand>
      </Navbar>
    </>
  );
};
export default Navigation;
