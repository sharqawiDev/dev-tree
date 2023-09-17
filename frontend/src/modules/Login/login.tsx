import { useUserStore } from "@/store";
import Logo from "@/assets/images/logo-devlinks-small.svg";
import "./login.scss";
import Card from "@/components/Card/Card";
const Login = () => {
  const { login } = useUserStore();
  return (
    <div className="login-page">
      <div className="header">
        <img src={Logo} alt="devlinks logo" />
        <h1>DevTree</h1>
      </div>
      <Card>
        <h2>Login</h2>
        <button onClick={() => null}>Login with Github</button>
      </Card>
    </div>
  );
};

export default Login;
