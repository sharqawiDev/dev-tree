import { useLocation, useHistory } from "react-router-dom";
import Button from "@/components/Button/Button";
import "./error.scss";
const Error = () => {
  const location = useLocation();
  const history = useHistory();
  return (
    <div className="error-page">
      <h1>404</h1>
      <p>Page {location.pathname} not found</p>
      <div>
        <Button onClick={() => history.push("/login")}>Login</Button>
        <Button onClick={() => history.goBack()}>Go Back</Button>
      </div>
    </div>
  );
};

export default Error;
