import { useUserStore } from "@/store";
import Logo from "@/assets/images/logo-devlinks-small.svg";
import "./login.scss";
const Login = () => {
  const { login } = useUserStore();
  return (
    <div className="login-page">
      <div className="header">
        <img src={Logo} alt="devlinks logo" />
        <h1>DevTree</h1>
      </div>
    </div>
  );
};

export default Login;
