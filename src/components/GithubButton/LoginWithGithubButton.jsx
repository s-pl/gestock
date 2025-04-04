/**
 took it from internet
 */

import React from "react";
import { FaGithub } from "react-icons/fa";

const buttonStyle = {
  backgroundColor: "#24292f",
  color: "white",
  padding: "10px 16px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "8px",
  fontSize: "16px",
  fontWeight: "bold",
  width: "100%",
  marginBottom: '10px'
};

export default function LoginWithGithubButton({ onClick }) {
  return (
    <button onClick={onClick} style={buttonStyle}>
      <FaGithub size={20} />
      Login with GitHub
    </button>
  );
}
