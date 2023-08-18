import React from "react";
import { FormattedDate, FormattedNumber, FormattedPlural } from "react-intl";

function Footer() {
  return (
    <div className="container mt">
      <FormattedDate
        value={Date.now()}
        year="numeric"
        month="long"
        day="2-digit"
      />
      <br />
      <FormattedNumber value={2000}  style={`currency`} currency="INR"/>
      <br />
      <FormattedPlural value={1} one="1 click" other="5 clicks" />
    </div>
  );
}

export default Footer;
