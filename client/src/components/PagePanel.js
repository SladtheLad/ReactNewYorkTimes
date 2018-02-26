import React from "react";

const PagePanel = (props) => (
  <div className="panel text-center">
    <div className="panel-heading">
      <h4>{props.name}</h4>
    </div>
    <div className="panel-body">
      {props.children}
    </div>
  </div>
);

export default PagePanel;