import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {isMobile} from '../../utils';
import {
  Navbar,
  Nav,
  NavItem,
  NavbarToggler,
  NavbarBrand,
  Collapse,
} from 'reactstrap';
import './index.scss';

const Navigation = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <Navbar
      color="dark"
      dark
      expand="sm"
      className={isMobile ? null : 'nav__height'}>
      <NavbarBrand
        href="https://github.com/cooldaynow/test"
        target="_blank"
        rel="noopener noreferrer"
        title="Link to GitHub"
        className="nav__brand">
        Разговорная Лексика
      </NavbarBrand>

      <NavbarToggler onClick={() => setToggle(!toggle)} />
      <Collapse
        isOpen={toggle}
        className={!isMobile && 'justify-content-end'}
        navbar>
        <Nav className={isMobile ? 'links__wrap mobile' : 'links__wrap'} navbar>
          <NavItem>
            <Link className="link" to="/" title="Go to Test">
              Test
            </Link>
          </NavItem>
          <NavItem>
            <Link className="link" to="/Info" title="Go to Information">
              Information
            </Link>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};
export default Navigation;
