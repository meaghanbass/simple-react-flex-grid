import React from "react";
import "./index.css";

const GridWrap = ({ maxWidth, children, ...props }) => {
  return (
    <div className={`grid-wrap ${props.className ? props.className : ""}`} style={{ maxWidth: `${maxWidth ? maxWidth + "px" : null}` }}>
      {children}
    </div>
  );
};

const GridRow = ({ children, wrap, justify, align, ...props }) => {
  return (
    <div className={`grid-row ${wrap ? `${wrap}` : ""} ${justify ? `justify-${justify}` : ""} ${align ? `align-${align}` : ""} ${props.className ? props.className : ""}`} style={props.style}>
      {children}
    </div>
  );
};

const GridColumn = ({ children, width, offset, order, ...props }) => {
  const getColumnWidth = (width) => {
    if (width) {
      if (typeof width === "object") {
        return width.map((value, index) => `at-${index + 1}--flex-${value} `).join(" ");
      }
      if (typeof width === "number") {
        return `at-${1}--flex-${width} at-${2}--flex-${width} at-${3}--flex-${width} at-${4}--flex-${width} at-${5}--flex-${width} at-${6}--flex-${width} at-${7}--flex-${width} at-${8}--flex-${width} at-${9}--flex-${width} at-${10}--flex-${width} at-${11}--flex-${width} at-${12}--flex-${width} `;
      }
    }
    return "";
  };

  const getOffset = (offset) => {
    if (offset) {
      if (typeof offset === "object") {
        return offset.map((value, index) => `at-${index + 1}--offset-${value}`).join(" ");
      }
      if (typeof offset === "number") {
        return `at-${1}--offset-${offset} at-${2}--offset-${offset} at-${3}--offset-${offset} at-${4}--offset-${offset} at-${5}--offset-${offset} at-${6}--offset-${offset} at-${7}--offset-${offset} at-${8}--offset-${offset} at-${9}--offset-${offset} at-${10}--offset-${offset} at-${11}--offset-${offset} at-${12}--offset-${offset} `;
      }
    }
    return "";
  };

  return (
    <div className={`grid-column ${getColumnWidth(width)} ${getOffset(offset)} ${props.className ? props.className : ""}`} style={{ order: `${order ? order : null}` }}>
      {children}
    </div>
  );
};

export { GridWrap, GridRow, GridColumn };
