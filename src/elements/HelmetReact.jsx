import React from "react";
import { Helmet } from "react-helmet";
const HelmetReact = ({ title }) => {
  return (
    <Helmet>
      <title>
        {title} || FaconTech - IT Technology and IT Solutions React Template
      </title>
      <meta
        name="description"
        content="FaconTech - IT Technology and IT Solutions React Template"
      />
    </Helmet>
  );
};

export default HelmetReact;
