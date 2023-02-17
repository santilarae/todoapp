import React from "react";
import "./CreateTodoButton.css";

function CreateTodoButton() {
  return (
      <button className="CreateTodoButton">
        <svg
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.629487 13.3705L0.629486 14.9137L13.2284 14.9137L13.2284 27.5127H14.7716L14.7716 14.9137L27.3705 14.9137L27.3705 13.3705L14.7716 13.3705L14.7716 0.771637L13.2284 0.771637L13.2284 13.3705L0.629487 13.3705Z"
            fill="white"
          />
        </svg>
      </button>
  );
}

export { CreateTodoButton };