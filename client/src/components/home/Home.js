import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>This is home page</h1>
      <h3>Please chose one of the options below:</h3>
      <div
        style={{
          justifyContent: "space-between",
          display: "flex",
          padding: "2em",
        }}
      >
        <StyledButton>
          <Link to="/auth">Login</Link>
        </StyledButton>
        <StyledButton>
          <Link to="/register">Sign up</Link>
        </StyledButton>
      </div>
    </div>
  );
}

const StyledButton = styled.div`
  padding: 1em 2em;
  border: 1px solid grey;
  border-radius: 7px;
  color: grey;
  background-color: cadetblue;
  text-decoration: none;
  cursor: pointer;
  font-weight: 800;

  a {
    text-decoration: none;
    color: floralwhite;
  }
`;
