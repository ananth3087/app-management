import React from "react";
import "./Error.css";
export default function Error(props) {
  return (
    <div className="error-page">
      <h2>
        {props.category === "page-not-found"
          ? "File not found"
          : "Something went wrong, please try again"}
      </h2>
    </div>
  );
}
