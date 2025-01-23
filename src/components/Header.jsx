import { useNavigate } from "react-router";
import { Button, Card, CardText, CardTitle } from "reactstrap";

function Header(props) {
  const navigate = useNavigate();

  return (
    <header>
      <h1>Welcome!</h1>
      <h1>Please Log In!</h1>
      <Button
        color="primary"
        onClick={() => {
          navigate("/login");
        }}
      >
        Login
      </Button>
    </header>
  );
}

export default Header;
