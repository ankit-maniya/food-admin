import React from "react";
import ReactTooltip from "react-tooltip";

const Tooltip = (props) => {
  return (
    <>
      <ReactTooltip
        id="tooltip__view__action"
        place="top"
        type="dark"
        effect="solid"
      >
        <span>View Action</span>
      </ReactTooltip>
      <ReactTooltip
        id="tooltip__save__action"
        place="top"
        type="dark"
        effect="solid"
      >
        <span>Save</span>
      </ReactTooltip>
      <ReactTooltip
        id="tooltip__updateStatus__action"
        place="top"
        type="dark"
        effect="solid"
      >
        <span>Update Status</span>
      </ReactTooltip>
    </>
  );
};

export default Tooltip;
