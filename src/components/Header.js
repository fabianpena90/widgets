import React from 'react';
import Link from './Link'

function Header(props) {
  return (
    <div>
      <div className="ui secondary pointing menu">
        <Link href="/" className="item">Accordion</Link>
        <Link href="/list" className="item">Wikipedia</Link>
        <Link href="/colorSelector" className="item">Color Selector</Link>
        <Link href="/translate" className="item">Translate</Link>
      </div>
    </div>
  );
}

export default Header;