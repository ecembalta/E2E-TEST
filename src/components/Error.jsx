import React from "react";
import { useNavigate } from "react-router";
import { Button } from "reactstrap";

function Error() {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Error!</h1>
      <Button
        color="danger"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </header>
  );
}

export default Error;
