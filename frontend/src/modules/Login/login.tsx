import { useUserStore } from "@/store";
import Logo from "@/assets/images/logo-devlinks-small.svg";
import "./login.scss";
import Card from "@/components/Card/Card";
import Button from "@/components/Button/Button";
import Input from "@/components/Input/Input";
import EmailIcon from "@/assets/images/icon-email";
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
        <Input label="Email address" icon={<EmailIcon />} />
        <Button onClick={() => null}>Login</Button>
      </Card>
    </div>
  );
};

export default Login;
