import React from "react";
import { LOCALES } from "../i18n/locales";

function Header(props) {
  const languages = [
    { name: "English", code: LOCALES.ENGLISH },
    { name: "தமிழ்", code: LOCALES.TAMIL },
  ];
  return (
    <div className="container header_content">
      <nav></nav>
      <div className="spacer"></div>
      <div className="switcher">
      {/* Language switch dropdown */}
      <select onChange={props.handleLocaleChange} value={props.currentLocale}>
        {languages.map(({ name, code }) => (
          <option key={code} value={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
    </div>
  );
}

export default Header;
