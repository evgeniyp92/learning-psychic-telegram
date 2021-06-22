import React from "react";

const Link = ({ className, href, children }) => {
  const onClick = e => {
    // if the user is holding down meta or ctrl,
    // let the event execute
    if (e.metaKey || e.ctrlKey) {
      return;
    }

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
