import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const Navigation = () => {
  return (
    <header>
      <nav>
        <NavLink
          exact
          className="NavLink"
          activeClassName="NavLink_active"
          to={routes.home}
        >
          Home
        </NavLink>

        <NavLink
          className="NavLink"
          activeClassName="NavLink_active"
          to={routes.movies}
        >
          Movies
        </NavLink>
      </nav>
    </header>
  );
};

export default Navigation;
