import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = e => {
    // prevent page reload
    e.preventDefault();
    // change the browser url
    window.history.pushState({}, "", href);
    // emit a navigation event
    const navEvent = new PopStateEvent("popstate");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} className={className} href={href}>
      {children}
    </a>
  );
};

export default Link;
