import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav({ scenes }) {
  let [collapsed, setCollapse] = useState(true);
  let Menu = () => (
    <ul>
      {scenes.map(s =>
        <li key={s.title}>
          <Link to={s.slug}>{s.title}</Link>
        </li>
      )}
    </ul>
  );

  return (
    <nav className="router">
      <button onClick={() => setCollapse(!collapsed)}>
        {collapsed ? 'Menu' : 'Close'}
      </button>
      {collapsed ? <></> : <Menu />}
    </nav>
  );
}

export default Nav;
