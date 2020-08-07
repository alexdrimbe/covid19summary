import React from "react";
const RowItem = ({ name, newConfirmed, newDeaths, header }) => {
  return (
    <div
      style={{
        fontFamily: "Arial, Helvetica, sans-serif",
        display: "flex",
        padding: "5px",
        borderBottom: "1px solid #dfdfdf",
        backgroundColor: header ? "dimgray" : "white",
        color: header ? "white" : "black",
      }}
    >
      <div
        style={{
          flex: 1,
        }}
      >
        {name}
      </div>
      <div
        style={{
          width: "200px",
          textAlign: "right",
        }}
      >
        {newConfirmed}
      </div>
      <div
        style={{
          width: "200px",
          textAlign: "right",
        }}
      >
        {newDeaths}
      </div>
    </div>
  );
};

export default RowItem;
