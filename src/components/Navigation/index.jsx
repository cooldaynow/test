import React from 'react';
import {Link} from 'react-router-dom';
import {Navbar} from 'reactstrap';
import './index.scss';

const Navigation = () => {
  return (
    <>
      <Navbar color="dark" light className="nav__wrap">
        <div className="nav__links">
          <Link className="link" to="/" title="Go to Test">
            Test
          </Link>
          <Link className="link" to="/Info" title="Go to Information">
            Information
          </Link>
          <a
            className="link"
            href="https://github.com/cooldaynow/test"
            title="Link to GitHub"
            target="_blank"
            rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </Navbar>
    </>
  );
};
export default Navigation;
