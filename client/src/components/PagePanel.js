import React from "react";

const PagePanel = (props) => (
  <div className="panel">
    <div className="panel-heading">
      <h2>{props.name}</h2>
    </div>
    <div className="panel-body">
      {props.children}
    </div>
  </div>
);

export default PagePanel;