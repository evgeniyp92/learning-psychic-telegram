import React, { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: `What is React?`,
    content: `React is a frontend Javascript framework`,
  },
  {
    title: `Why use React?`,
    content: `React is a favorite JS library among engineers`,
  },
  {
    title: `How do you use React?`,
    content: `You use React by creating components`,
  },
];

const options = [
  { label: "The Color Red", value: "red" },
  { label: "The Color Green", value: "green" },
  { label: "A Shade of Blue", value: "blue" },
];

// Route mappings
const showAccordion = () => {
  if (window.location.pathname === '/') {
    return <Accordion items={items} />;
  }
}
const showSearch = () => {
  if (window.location.pathname === '/search') {
    return <Search />
  }
}
const showDropdown = () => {
  if (window.location.pathname === '/dropdown') {
    return <Dropdown />
  }
}
const showTranslate = () => {
  if (window.location.pathname === '/translate') {
    return <Translate />
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      {showAccordion()}
      {showSearch()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};
