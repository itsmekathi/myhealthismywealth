import React from "react";
import { FormattedMessage } from "react-intl";

function Content() {
  return (
    <div className="container hero">
      <p>
        <FormattedMessage id="learn_to" />
      </p>
      <p>
        <FormattedMessage
          id="price_display"
          values={{ n: 99.99, type: "number", format: "currency/INR" }}
        />
      </p>
      <p>
        <FormattedMessage id="number_display" values={{ n: 109.9 }} />
      </p>
      <p>
        <FormattedMessage id="start_today" values={{ d: new Date() }} />
      </p>
    </div>
  );
}

export default Content;
