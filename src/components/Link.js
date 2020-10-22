import React from 'react';

function Link({className, href, children}) {

  function handleClick(e) {

    if(e.metaKey || e.ctrlKey) {
      return;
    }

    e.preventDefault();
    window.history.pushState({},"", href);

    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  }
  return (
    <a onClick={handleClick} className={className} href={href} children={children}></a>
  );
}

export default Link;